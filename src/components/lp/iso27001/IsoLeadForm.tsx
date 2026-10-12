"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Loader2,
  User,
  Mail,
  Building2,
  Phone,
} from "lucide-react";

interface FormState {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  hp_field?: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  phone?: string;
  companyName?: string;
}

export const IsoLeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    workEmail: "",
    phone: "",
    companyName: "",
    hp_field: "",
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Please enter your work email.";
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = "Please enter a valid work email address.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Please enter your company or organisation name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        const errorInput = document.getElementById(`iso-${firstErrorKey}`);
        if (errorInput) errorInput.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.workEmail.trim().toLowerCase(),
          company: formData.companyName.trim(),
          phone: formData.phone.trim(),
          request_type: "DEMO",
          source_page: "/lp/iso-27001",
          hp_field: formData.hp_field,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to submit request. Please try again or email us directly at contact@omnigrc.co.");
      }

      // Safe non-PII Google conversion event dispatch upon verified API acceptance
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function" && !hasFiredConversionRef.current) {
        hasFiredConversionRef.current = true;
        try {
          (window as any).gtag("event", "generate_lead", {
            event_category: "Lead Generation",
            event_label: "ISO 27001 Google Ads Landing Page",
            value: 1,
          });

          const adsTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-18503231155";
          const adsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
          if (adsConversionLabel) {
            (window as any).gtag("event", "conversion", {
              send_to: `${adsTagId}/${adsConversionLabel}`,
              value: 1.0,
              currency: "INR",
            });
          }
        } catch (trackingErr) {
          console.warn("Analytics event dispatch notice:", trackingErr);
        }
      }

      setSubmittedData({ ...formData });
      setIsSuccess(true);
    } catch (err: any) {
      setSubmitError(
        err?.message ||
          "Unable to submit request. Please try again or email us directly at contact@omnigrc.co."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      workEmail: "",
      phone: "",
      companyName: "",
      hp_field: "",
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
        className="w-full bg-white border border-[#2e936f]/40 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
        role="region"
        aria-live="polite"
        aria-label="Demo request confirmation"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2e936f]/10 rounded-bl-full pointer-events-none" />

        <div className="text-center py-4">
          <div className="w-14 h-14 bg-[#2e936f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#2e936f]/30">
            <CheckCircle2 className="w-8 h-8 text-[#2e936f]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
            Demo Request Confirmed
          </h3>

          <p className="text-sm text-stone-600 leading-relaxed max-w-md mx-auto mb-6">
            Thank you, <strong className="text-stone-900">{submittedData.fullName}</strong>. An OMNiGRC
            ISMS specialist will review your organization ({submittedData.companyName}) and reach out to schedule your 20-minute ISO 27001 walkthrough.
          </p>

          <div className="bg-[#f7d7b0]/25 border border-[#f7d7b0] rounded-xl p-4 text-left max-w-md mx-auto mb-6 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#f15e1c]">
              What to Expect in Your 20-Min Session
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
              <li>How the centralized ISMS Risk Register replaces disconnected sheets</li>
              <li>Live Statement of Applicability (SoA) mapping across 93 Annex A controls</li>
              <li>Audit evidence tracking & internal audit workpapers demonstration</li>
            </ul>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-stone-500 hover:text-[#f15e1c] font-medium underline transition-colors cursor-pointer"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="lead-form"
      className="w-full bg-white border border-[#f7d7b0] rounded-2xl p-5 sm:p-7 shadow-sm backdrop-blur-md relative"
    >
      {/* Lead Form Header */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f7d7b0]/40 border border-[#fab60a]/50 text-xs font-semibold text-[#f15e1c]">
            <Sparkles className="w-3.5 h-3.5 text-[#f15e1c]" />
            ISMS Readiness Walkthrough
          </span>
          <span className="flex items-center gap-1 text-[11px] font-medium text-stone-500">
            <Clock className="w-3 h-3 text-[#2e936f]" />
            20-Min Live Demo
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-stone-900">
          See OMNiGRC in Action
        </h3>
        <p className="text-xs text-stone-600 mt-1">
          Explore risk registers, Annex A control crosswalks, and Statement of Applicability generation.
        </p>
      </div>

      {/* Global Error Banner */}
      {submitError && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-4 p-3 rounded-xl bg-[#f7d7b0]/30 border border-[#f15e1c]/40 text-xs text-[#f15e1c] flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 text-[#f15e1c] shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold">Submission failed: </span>
            {submitError}
          </div>
        </div>
      )}

      {/* Demo Form Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        {/* Anti-spam Honeypot (Hidden) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="iso-hp-field">Leave this empty</label>
          <input
            type="text"
            id="iso-hp-field"
            name="hp_field"
            value={formData.hp_field || ""}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Full Name */}
        <div>
          <label
            htmlFor="iso-full-name"
            className="block text-xs font-medium text-stone-700 mb-1"
          >
            Full Name <span className="text-[#f15e1c]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="iso-full-name"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
              disabled={isSubmitting}
              className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition-colors ${
                errors.fullName
                  ? "border-[#f15e1c] focus:ring-[#f15e1c]/20 bg-[#f7d7b0]/15"
                  : "border-stone-200 focus:border-[#2e936f] focus:ring-[#2e936f]/20 bg-stone-50/50"
              }`}
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby={errors.fullName ? "iso-name-error" : undefined}
            />
          </div>
          {errors.fullName && (
            <p id="iso-name-error" className="mt-1 text-[11px] text-[#f15e1c] flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label
            htmlFor="iso-work-email"
            className="block text-xs font-medium text-stone-700 mb-1"
          >
            Work Email <span className="text-[#f15e1c]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id="iso-work-email"
              name="workEmail"
              required
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="priya@company.com"
              disabled={isSubmitting}
              className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition-colors ${
                errors.workEmail
                  ? "border-[#f15e1c] focus:ring-[#f15e1c]/20 bg-[#f7d7b0]/15"
                  : "border-stone-200 focus:border-[#2e936f] focus:ring-[#2e936f]/20 bg-stone-50/50"
              }`}
              aria-invalid={errors.workEmail ? "true" : "false"}
              aria-describedby={errors.workEmail ? "iso-email-error" : undefined}
            />
          </div>
          {errors.workEmail && (
            <p id="iso-email-error" className="mt-1 text-[11px] text-[#f15e1c] flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.workEmail}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="iso-company"
            className="block text-xs font-medium text-stone-700 mb-1"
          >
            Company Name <span className="text-[#f15e1c]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Building2 className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="iso-company"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Acme Technologies"
              disabled={isSubmitting}
              className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition-colors ${
                errors.companyName
                  ? "border-[#f15e1c] focus:ring-[#f15e1c]/20 bg-[#f7d7b0]/15"
                  : "border-stone-200 focus:border-[#2e936f] focus:ring-[#2e936f]/20 bg-stone-50/50"
              }`}
              aria-invalid={errors.companyName ? "true" : "false"}
              aria-describedby={errors.companyName ? "iso-company-error" : undefined}
            />
          </div>
          {errors.companyName && (
            <p id="iso-company-error" className="mt-1 text-[11px] text-[#f15e1c] flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="iso-phone"
            className="block text-xs font-medium text-stone-700 mb-1"
          >
            Phone Number <span className="text-[#f15e1c]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              id="iso-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              disabled={isSubmitting}
              className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition-colors ${
                errors.phone
                  ? "border-[#f15e1c] focus:ring-[#f15e1c]/20 bg-[#f7d7b0]/15"
                  : "border-stone-200 focus:border-[#2e936f] focus:ring-[#2e936f]/20 bg-stone-50/50"
              }`}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "iso-phone-error" : undefined}
            />
          </div>
          {errors.phone && (
            <p id="iso-phone-error" className="mt-1 text-[11px] text-[#f15e1c] flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Primary Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#f15e1c] hover:bg-[#d85016] text-white font-bold text-sm shadow-sm hover:shadow transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Scheduling Demo...</span>
              </>
            ) : (
              <>
                <span>Book a 20-Min Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Privacy Policy & Data Handling Disclaimer */}
        <p className="text-[11px] text-stone-500 text-center leading-normal pt-1">
          By booking, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="text-[#2e936f] hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </Link>
          . Your details are used solely to schedule this session.
        </p>

        {/* Trust Badges Bar */}
        <div className="pt-3 border-t border-[#f7d7b0]/60 flex items-center justify-center gap-3 text-[11px] text-stone-600">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2e936f]" />
            ISMS 2022 Ready
          </span>
          <span className="text-stone-300">•</span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#fab60a]" />
            Zero SPAM Guarantee
          </span>
        </div>
      </form>
    </div>
  );
};
