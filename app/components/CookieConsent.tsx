"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  defaultPreferences,
  OPEN_COOKIE_SETTINGS_EVENT,
  readStoredConsent,
  saveConsent,
  type CookiePreferences,
  type StoredCookieConsent,
} from "../lib/cookieConsent";

const categoryCopy: Record<
  keyof Omit<CookiePreferences, "essential">,
  { title: string; description: string }
> = {
  analytics: {
    title: "Analytics",
    description:
      "Helps us understand how visitors use scleindia.com so we can improve pages and content.",
  },
  marketing: {
    title: "Marketing",
    description:
      "Used to measure campaign performance and show relevant promotions on other platforms.",
  },
};

function PreferenceToggle({
  checked,
  disabled,
  label,
  description,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  label: string;
  description: string;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 rounded-lg border border-border bg-white p-4">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-border text-orange focus:ring-orange"
      />
      <span>
        <span className="block text-sm font-semibold text-navy">{label}</span>
        <span className="mt-1 block text-sm text-muted">{description}</span>
      </span>
    </label>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [draft, setDraft] = useState<CookiePreferences>(defaultPreferences);

  const applyConsent = useCallback((preferences: CookiePreferences) => {
    saveConsent(preferences);
    setDraft(preferences);
    setVisible(false);
    setShowPreferences(false);
  }, []);

  const syncFromStorage = useCallback(() => {
    const stored = readStoredConsent();
    if (stored) {
      setDraft(stored.preferences);
      setVisible(false);
      return;
    }

    setDraft(defaultPreferences);
    setVisible(true);
  }, []);

  useEffect(() => {
    syncFromStorage();

    const openSettings = () => {
      const stored = readStoredConsent();
      if (stored) setDraft(stored.preferences);
      setShowPreferences(true);
      setVisible(true);
    };

    const onConsentUpdated = (event: Event) => {
      const detail = (event as CustomEvent<StoredCookieConsent>).detail;
      setDraft(detail.preferences);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);

    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
    };
  }, [syncFromStorage]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-white shadow-2xl shadow-navy/15">
        <div className="p-5 sm:p-6">
          <h2 id="cookie-consent-title" className="text-lg font-bold text-navy">
            {showPreferences ? "Cookie preferences" : "We value your privacy"}
          </h2>
          <p id="cookie-consent-description" className="mt-2 text-sm leading-relaxed text-muted">
            {showPreferences
              ? "Choose which optional cookies you allow. Essential cookies are always active because they are required for the site to work."
              : "SCLE India uses cookies to keep the website secure and, with your permission, to understand how our site is used. You can accept all cookies, use essential cookies only, or manage your preferences."}
          </p>

          {showPreferences ? (
            <div className="mt-4 space-y-3">
              <PreferenceToggle
                checked
                disabled
                label="Essential"
                description="Required for core site features and to remember your cookie choices."
                onChange={() => undefined}
              />
              {(Object.keys(categoryCopy) as Array<keyof typeof categoryCopy>).map((key) => (
                <PreferenceToggle
                  key={key}
                  checked={draft[key]}
                  label={categoryCopy[key].title}
                  description={categoryCopy[key].description}
                  onChange={(value) => setDraft((current) => ({ ...current, [key]: value }))}
                />
              ))}
            </div>
          ) : null}

          <p className="mt-4 text-xs text-muted">
            Read our{" "}
            <Link href="/cookie-policy" className="font-semibold text-navy underline-offset-2 hover:underline">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {showPreferences ? (
              <>
                <button
                  type="button"
                  onClick={() => applyConsent(draft)}
                  className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
                >
                  Save preferences
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-section-bg"
                >
                  Back
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => applyConsent({ essential: true, analytics: true, marketing: true })}
                  className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => applyConsent(defaultPreferences)}
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-section-bg"
                >
                  Essential only
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreferences(true)}
                  className="rounded-full px-5 py-2.5 text-sm font-semibold text-navy underline-offset-2 transition-colors hover:underline"
                >
                  Manage preferences
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
