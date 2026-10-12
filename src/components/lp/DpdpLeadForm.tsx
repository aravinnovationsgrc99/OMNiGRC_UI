"use client";

import React, { useState, useRef } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  ArrowRight,
  Phone,
  Mail,
  User,
  Building2,
  RotateCcw
} from "lucide-react";

interface FormState {
  fullName: string;
  workEmail: string;
  countryCode: string;
  phoneNumber: string;
  companyName: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  phoneNumber?: string;
  companyName?: string;
}

const COUNTRY_CODES = [
  { code: "+91", label: "India (+91)", flag: "🇮🇳" },
  { code: "+1", label: "US/Canada (+1)", flag: "🇺🇸" },
  { code: "+44", label: "UK (+44)", flag: "🇬🇧" },
  { code: "+971", label: "UAE (+971)", flag: "🇦🇪" },
  { code: "+65", label: "Singapore (+65)", flag: "🇸🇬" },
  { code: "+61", label: "Australia (+61)", flag: "🇦🇺" },
  { code: "+49", label: "Germany (+49)", flag: "🇩🇪" },
  { code: "+33", label: "France (+33)", flag: "🇫🇷" },
  { code: "+966", label: "Saudi Arabia (+966)", flag: "🇸🇦" },
  { code: "+81", label: "Japan (+81)", flag: "🇯🇵" },
  { code: "+41", label: "Switzerland (+41)", flag: "🇨🇭" },
  { code: "+31", label: "Netherlands (+31)", flag: "🇳🇱" },
  { code: "+974", label: "Qatar (+974)", flag: "🇶🇦" },
];

export const DpdpLeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    workEmail: "",
    countryCode: "+91",
    phoneNumber: "",
    companyName: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Conversion tracking ref ensures event fires exactly once per confirmed lead
  const hasFiredConversionRef = useRef(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters)";
    }

    // Work email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = "Please enter a valid business email address";
    }

    // Phone number validation (Indian & international formats)
    const cleanedDigits = formData.phoneNumber.replace(/[\s\-\(\)\.]/g, "");
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d+$/.test(cleanedDigits)) {
      newErrors.phoneNumber = "Phone number must contain digits only";
    } else if (formData.countryCode === "+91" && cleanedDigits.length !== 10) {
      newErrors.phoneNumber = "Please enter a valid 10-digit Indian phone number";
    } else if (cleanedDigits.length < 7 || cleanedDigits.length > 15) {
      newErrors.phoneNumber = "Please enter a valid phone number (7-15 digits)";
    }

    // Company name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-level error when user types
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const fullPhone = `${formData.countryCode} ${formData.phoneNumber.trim()}`;
      const res = await fetch("/api/demo-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.workEmail.trim().toLowerCase(),
          company: formData.companyName.trim(),
          phone: fullPhone,
          message: "DPDP Compliance Software Demo Request (Google Ads Landing Page)",
          request_type: "DEMO",
          source_page: "/lp/dpdp-compliance",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "We could not submit your request. Please try again.");
      }

      // Safe non-PII Google conversion event dispatch upon verified API acceptance
      if (typeof window !== "undefined" && typeof window.gtag === "function" && !hasFiredConversionRef.current) {
        hasFiredConversionRef.current = true;
        try {
          // Standard lead generation event without PII
          window.gtag("event", "generate_lead", {
            event_category: "Lead Generation",
            event_label: "DPDP Google Ads Landing Page",
            source_page: "/lp/dpdp-compliance",
            framework: "DPDP",
            value: 1,
          });

          // Google Ads conversion event with route-specific or general fallback label
          const adsTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-18503231155";
          const adsConversionLabel =
            process.env.NEXT_PUBLIC_GOOGLE_ADS_DPDP_CONVERSION_LABEL ||
            process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

          if (adsConversionLabel) {
            window.gtag("event", "conversion", {
              send_to: `${adsTagId}/${adsConversionLabel}`,
              value: 1.0,
              currency: "INR",
              source_page: "/lp/dpdp-compliance",
            });
          }
        } catch (trackingErr) {
          console.warn("Analytics event dispatch notice:", trackingErr);
        }
      }

      setSubmittedData({ ...formData });
      setIsSuccess(true);
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      workEmail: "",
      countryCode: "+91",
      phoneNumber: "",
      companyName: "",
    });
    setErrors({});
    setSubmitError(null);
    setIsSuccess(false);
    setSubmittedData(null);
    hasFiredConversionRef.current = false;
  };

  if (isSuccess && submittedData) {
    return (
      <div
        id="lead-form"
        className="w-full bg-white dark:bg-[#16233F] border border-teal-500/40 dark:border-teal-500/50 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
        role="region"
        aria-live="polite"
        aria-label="Demo request confirmation"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="text-center space-y-4">
          <div className="inline-flex p-3 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-[#2E936F] dark:text-teal-300">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2E936F] dark:text-teal-400">
              REQUEST RECEIVED
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white mt-1">
              Your DPDP Demo is Booked
            </h3>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-navy-900 dark:text-white">{submittedData.fullName}</strong>. A dedicated
            OMNiGRC privacy specialist will review your organisation ({submittedData.companyName}) and share walkthrough
            scheduling options.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900/80 border border-slate-200 dark:border-navy-700/80 text-left text-xs space-y-2 max-w-md mx-auto">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span>Confirmation sent to:</span>
              <strong className="text-navy-900 dark:text-slate-200 font-mono text-[11px]">
                {submittedData.workEmail}
              </strong>
            </div>
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span>Primary contact:</span>
              <strong className="text-navy-900 dark:text-slate-200 font-mono text-[11px]">
                {submittedData.countryCode} {submittedData.phoneNumber}
              </strong>
            </div>
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span>Response SLA:</span>
              <span className="text-[#2E936F] dark:text-teal-400 font-bold">Within 1 business day</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Submit another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="lead-form"
      tabIndex={-1}
      className="w-full bg-white dark:bg-[#16233F]/95 border border-slate-200 dark:border-navy-700/80 rounded-2xl p-5 sm:p-7 shadow-xl backdrop-blur-md relative focus:outline-none"
    >
      {/* Lead Form Header */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#D4521A] dark:text-amber">
            EXCLUSIVE WALKTHROUGH
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2E936F] dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded-full border border-teal-200/60 dark:border-teal-800/60">
            <ShieldCheck className="w-3 h-3" /> 30-Min Session
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 dark:text-white tracking-tight">
          Request a DPDP Software Walkthrough
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          See live consent workflows, vendor registers, and audit evidence logging.
        </p>
      </div>

      {/* Submission Error Banner */}
      {submitError && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-xs text-red-700 dark:text-red-300 flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold">Submission failed</p>
            <p className="mt-0.5">{submitError}</p>
          </div>
        </div>
      )}

      {/* Form Element */}
      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        {/* Field 1: Full Name */}
        <div>
          <label
            htmlFor="dpdp-full-name"
            className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1"
          >
            Full name <span className="text-[#F15E1C]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User className="h-4 w-4" />
            </div>
            <input
              id="dpdp-full-name"
              name="fullName"
              type="text"
              required
              disabled={isSubmitting}
              autoComplete="name"
              placeholder="e.g. Ananya Roy"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "dpdp-name-error" : undefined}
              className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 dark:bg-navy-900/60 text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                errors.fullName
                  ? "border-red-400 dark:border-red-500 focus:ring-red-400"
                  : "border-slate-200 dark:border-navy-700 focus:ring-[#2E936F] dark:focus:ring-teal focus:border-transparent"
              }`}
            />
          </div>
          {errors.fullName && (
            <p id="dpdp-name-error" className="text-[11px] text-red-600 dark:text-red-400 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Field 2: Work Email */}
        <div>
          <label
            htmlFor="dpdp-work-email"
            className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1"
          >
            Work email <span className="text-[#F15E1C]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail className="h-4 w-4" />
            </div>
            <input
              id="dpdp-work-email"
              name="workEmail"
              type="email"
              required
              disabled={isSubmitting}
              autoComplete="email"
              placeholder="ananya@company.com"
              value={formData.workEmail}
              onChange={(e) => handleInputChange("workEmail", e.target.value)}
              aria-invalid={!!errors.workEmail}
              aria-describedby={errors.workEmail ? "dpdp-email-error" : undefined}
              className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 dark:bg-navy-900/60 text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                errors.workEmail
                  ? "border-red-400 dark:border-red-500 focus:ring-red-400"
                  : "border-slate-200 dark:border-navy-700 focus:ring-[#2E936F] dark:focus:ring-teal focus:border-transparent"
              }`}
            />
          </div>
          {errors.workEmail && (
            <p id="dpdp-email-error" className="text-[11px] text-red-600 dark:text-red-400 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errors.workEmail}
            </p>
          )}
        </div>

        {/* Field 3: Phone Number (Country Code + Number) */}
        <div>
          <label
            htmlFor="dpdp-phone-number"
            className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1"
          >
            Phone number <span className="text-[#F15E1C]">*</span>
          </label>
          <div className="flex gap-2">
            <div className="relative w-36 sm:w-40 shrink-0">
              <label htmlFor="dpdp-country-code" className="sr-only">
                Country Dial Code
              </label>
              <select
                id="dpdp-country-code"
                name="countryCode"
                disabled={isSubmitting}
                value={formData.countryCode}
                onChange={(e) => handleInputChange("countryCode", e.target.value)}
                className="w-full py-2.5 px-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-navy-700 bg-slate-50/50 dark:bg-navy-900/60 text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2E936F] dark:focus:ring-teal disabled:opacity-60 cursor-pointer"
              >
                {COUNTRY_CODES.map((item) => (
                  <option key={item.code} value={item.code} className="bg-white dark:bg-[#16233F] text-navy-900 dark:text-white">
                    {item.flag} {item.code}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Phone className="h-4 w-4" />
              </div>
              <input
                id="dpdp-phone-number"
                name="phoneNumber"
                type="tel"
                required
                disabled={isSubmitting}
                autoComplete="tel"
                placeholder={formData.countryCode === "+91" ? "98765 43210" : "Phone number"}
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                aria-invalid={!!errors.phoneNumber}
                aria-describedby={errors.phoneNumber ? "dpdp-phone-error" : undefined}
                className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 dark:bg-navy-900/60 text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                  errors.phoneNumber
                    ? "border-red-400 dark:border-red-500 focus:ring-red-400"
                    : "border-slate-200 dark:border-navy-700 focus:ring-[#2E936F] dark:focus:ring-teal focus:border-transparent"
                }`}
              />
            </div>
          </div>
          {errors.phoneNumber && (
            <p id="dpdp-phone-error" className="text-[11px] text-red-600 dark:text-red-400 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* Field 4: Company Name */}
        <div>
          <label
            htmlFor="dpdp-company-name"
            className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1"
          >
            Company name <span className="text-[#F15E1C]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Building2 className="h-4 w-4" />
            </div>
            <input
              id="dpdp-company-name"
              name="companyName"
              type="text"
              required
              disabled={isSubmitting}
              autoComplete="organization"
              placeholder="e.g. RazorPay, Groww, or Innovaccer"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              aria-invalid={!!errors.companyName}
              aria-describedby={errors.companyName ? "dpdp-company-error" : undefined}
              className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 dark:bg-navy-900/60 text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-60 ${
                errors.companyName
                  ? "border-red-400 dark:border-red-500 focus:ring-red-400"
                  : "border-slate-200 dark:border-navy-700 focus:ring-[#2E936F] dark:focus:ring-teal focus:border-transparent"
              }`}
            />
          </div>
          {errors.companyName && (
            <p id="dpdp-company-error" className="text-[11px] text-red-600 dark:text-red-400 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Primary Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#F15E1C] hover:bg-[#D4521A] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#F15E1C] focus:ring-offset-2 dark:focus:ring-offset-[#16233F] disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Scheduling Demo...</span>
              </>
            ) : (
              <>
                <span>Book a Free DPDP Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Micro-trust and confidentiality note */}
        <div className="pt-1 text-center">
          <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3 text-[#2E936F] dark:text-teal shrink-0" />
            <span>Strict privacy. No spam. Zero obligation.</span>
          </p>
        </div>
      </form>
    </div>
  );
};
