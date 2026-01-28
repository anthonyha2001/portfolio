"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validProjectTypes = [
  "Web App",
  "Website Redesign",
  "Consultation",
] as const;

const validBudgetRanges = [
  "$100-200",
  "$300-400",
  "$400+",
] as const;

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z
    .string()
    .min(1, "Please select a project type")
    .refine(
      (value) =>
        validProjectTypes.includes(
          value as (typeof validProjectTypes)[number]
        ),
      {
        message: "Please select a valid project type",
      }
    ),
  budgetRange: z
    .string()
    .min(1, "Please select a budget range")
    .refine(
      (value) =>
        validBudgetRanges.includes(
          value as (typeof validBudgetRanges)[number]
        ),
      {
        message: "Please select a valid budget range",
      }
    ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className="rounded-lg bg-green-50 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <svg
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 font-serif text-2xl font-bold text-primary">
          Thank you!
        </h3>
        <p className="mt-2 font-sans text-base text-neutral-700">
          Your request has been sent. I'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block font-sans text-sm font-medium text-neutral-700"
        >
          Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 w-full rounded-md border-2 border-neutral-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
        {errors.name && (
          <p
            id="name-error"
            className="mt-1 font-sans text-sm text-red-600"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-sans text-sm font-medium text-neutral-700"
        >
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-2 w-full rounded-md border-2 border-neutral-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
        {errors.email && (
          <p
            id="email-error"
            className="mt-1 font-sans text-sm text-red-600"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block font-sans text-sm font-medium text-neutral-700"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          {...register("company")}
          aria-invalid={errors.company ? "true" : "false"}
          aria-describedby={errors.company ? "company-error" : undefined}
          className="mt-2 w-full rounded-md border-2 border-neutral-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
        {errors.company && (
          <p
            id="company-error"
            className="mt-1 font-sans text-sm text-red-600"
          >
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="block font-sans text-sm font-medium text-neutral-700"
        >
          Project Type <span className="text-accent">*</span>
        </label>
        <select
          id="projectType"
          {...register("projectType")}
          aria-invalid={errors.projectType ? "true" : "false"}
          aria-describedby={
            errors.projectType ? "projectType-error" : undefined
          }
          className="mt-2 w-full rounded-md border-2 border-neutral-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <option value="">Select a project type</option>
          <option value="Web App">Web App</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Consultation">Consultation</option>
        </select>
        {errors.projectType && (
          <p
            id="projectType-error"
            className="mt-1 font-sans text-sm text-red-600"
          >
            {errors.projectType.message}
          </p>
        )}
      </div>

      {/* Budget Range */}
      <div>
        <label
          htmlFor="budgetRange"
          className="block font-sans text-sm font-medium text-neutral-700"
        >
          Budget Range <span className="text-accent">*</span>
        </label>
        <select
          id="budgetRange"
          {...register("budgetRange")}
          aria-invalid={errors.budgetRange ? "true" : "false"}
          aria-describedby={
            errors.budgetRange ? "budgetRange-error" : undefined
          }
          className="mt-2 w-full rounded-md border-2 border-neutral-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <option value="">Select a budget range</option>
          <option value="$100-200">$100-200</option>
          <option value="$300-400">$300-400</option>
          <option value="$400+">$400+</option>
        </select>
        {errors.budgetRange && (
          <p
            id="budgetRange-error"
            className="mt-1 font-sans text-sm text-red-600"
          >
            {errors.budgetRange.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-sans text-sm font-medium text-neutral-700"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full rounded-md border-2 border-neutral-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1 font-sans text-sm text-red-600"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#1a202c] hover:bg-[#1a202c]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}

