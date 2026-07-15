"use client";

import { openCookieSettings } from "../lib/cookieConsent";

export default function CookieSettingsTrigger() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="hover:text-orange transition-colors"
    >
      Cookie Settings
    </button>
  );
}
