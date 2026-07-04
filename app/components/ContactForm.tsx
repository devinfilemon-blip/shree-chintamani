"use client";

import { useState } from "react";

const inquiryTypes = [
  "General Enquiry",
  "Product Enquiry",
  "Service Enquiry",
  "Export / Import",
  "Bulk Order",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: inquiryTypes[0],
  message: "",
};

function validateForm(form: FormState): string | null {
  const name = form.name.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const subject = form.subject.trim();
  const message = form.message.trim();

  if (!name || !email || !phone || !subject || !message) {
    return "Please fill in all required fields.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }
  if (message.length < 10) {
    return "Message must be at least 10 characters.";
  }
  return null;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const validationError = validateForm(form);
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    const { name, email, phone, subject, message } = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Unable to send message. Please call or email us directly.");
        return;
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or contact us by phone.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors";

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
      <h3 className="text-lg font-bold text-white mb-1">Send Us a Message</h3>
      <p className="text-white/50 text-sm mb-6">
        Fill in the form below and our team will get back to you shortly.
      </p>

      {status === "success" ? (
        <div className="rounded-lg bg-orange/15 border border-orange/30 px-5 py-8 text-center">
          <span className="inline-flex w-12 h-12 rounded-full bg-orange/20 text-orange items-center justify-center text-2xl mb-4">
            ✓
          </span>
          <p className="text-white font-semibold text-lg">Message sent successfully!</p>
          <p className="text-white/60 text-sm mt-2">
            Thank you for contacting SCLE India. We will respond within 1–2 business days.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-orange text-sm font-semibold hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                Full Name <span className="text-orange">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                Phone <span className="text-orange">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-email" className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                Email <span className="text-orange">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                Inquiry Type <span className="text-orange">*</span>
              </label>
              <select
                id="contact-subject"
                required
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                {inquiryTypes.map((type) => (
                  <option key={type} value={type} className="bg-navy text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
              Message <span className="text-orange">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us about your requirement — product, quantity, destination, etc."
              className={`${inputClass} resize-y min-h-[120px]`}
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            {status === "loading" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
