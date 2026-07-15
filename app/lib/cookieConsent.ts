export const COOKIE_CONSENT_KEY = "scle-cookie-consent";
export const COOKIE_CONSENT_VERSION = 1;

export type CookieCategory = "essential" | "analytics" | "marketing";

export type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredCookieConsent = {
  version: number;
  preferences: CookiePreferences;
  updatedAt: string;
};

export const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export const OPEN_COOKIE_SETTINGS_EVENT = "scle:open-cookie-settings";
export const COOKIE_CONSENT_UPDATED_EVENT = "scle:cookie-consent-updated";

export function readStoredConsent(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(preferences: CookiePreferences): StoredCookieConsent {
  const stored: StoredCookieConsent = {
    version: COOKIE_CONSENT_VERSION,
    preferences: { ...preferences, essential: true },
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(stored));
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: stored }),
  );

  return stored;
}

export function hasAnalyticsConsent(preferences: CookiePreferences): boolean {
  return preferences.analytics;
}

export function openCookieSettings(): void {
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
