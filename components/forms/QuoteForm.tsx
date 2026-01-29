"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const projectTypes = [
  "New Website",
  "Website Redesign",
  "Web Application",
  "E-commerce Store",
  "Landing Page",
  "Other",
] as const;

const timelines = ["ASAP", "1 Week", "2 Weeks", "3 Weeks", "Flexible"] as const;

const budgetRanges = [
  "$100 - $200",
  "$300 - $400",
  "$400 - $600",
  "Not Sure Yet",
] as const;

const mainGoals = [
  "Generate leads",
  "Sell products/services",
  "Build brand awareness",
  "Provide information",
  "User engagement/community",
  "Other",
] as const;

const requiredFeatures = [
  "Contact form",
  "Blog/News section",
  "E-commerce/Shopping cart",
  "User login/accounts",
  "Payment processing",
  "Search functionality",
  "Multi-language support",
  "Content Management System (CMS)",
  "Email newsletter integration",
  "Social media integration",
  "Analytics/Reporting",
  "Mobile app integration",
  "Other",
] as const;

const contentStatuses = [
  "I will provide all content (text, images)",
  "I need help creating content",
  "Partially - I'll provide some content",
] as const;

const quoteFormSchema = z.object({
  // Basic Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  companyWebsite: z.string().optional().refine(
    (val) => !val || val === "" || z.string().url().safeParse(val).success,
    { message: "Please enter a valid URL" }
  ),
  
  // Project Type
  projectType: z.enum(["New Website", "Website Redesign", "Web Application", "E-commerce Store", "Landing Page", "Other"], {
    required_error: "Please select a project type",
  }),
  projectTypeOther: z.string().optional(),
  
  // Timeline
  timeline: z.enum(["ASAP", "1 Week", "2 Weeks", "3 Weeks", "Flexible"], {
    required_error: "Please select a timeline",
  }),
  
  // Budget
  budgetRange: z.enum(["$100 - $200", "$300 - $400", "$400 - $600", "Not Sure Yet"], {
    required_error: "Please select a budget range",
  }),
  
  // Target Audience
  targetAudience: z.string().min(10, "Please describe your target audience (at least 10 characters)").max(500, "Maximum 500 characters"),
  
  // Main Goals
  mainGoals: z.array(z.string()).min(1, "Please select at least one goal"),
  mainGoalsOther: z.string().optional(),
  
  // Required Features
  requiredFeatures: z.array(z.string()).min(1, "Please select at least one feature"),
  requiredFeaturesOther: z.string().optional(),
  
  // Design Preferences
  designPreferences: z.string().max(500, "Maximum 500 characters").optional(),
  
  // Content Status
  contentStatus: z.enum(["I will provide all content (text, images)", "I need help creating content", "Partially - I'll provide some content"], {
    required_error: "Please select a content status",
  }),
  
  // Additional Information
  additionalInfo: z.string().max(500, "Maximum 500 characters").optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      mainGoals: [],
      requiredFeatures: [],
    },
  });

  const projectType = watch("projectType");
  const mainGoalsSelected = watch("mainGoals") || [];
  const requiredFeaturesSelected = watch("requiredFeatures") || [];

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
        className="rounded-lg bg-green-50 p-8 text-center shadow-sm"
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic Information */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-6 font-serif text-xl font-semibold text-gray-900">
          Basic Information
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block font-sans text-sm font-medium text-gray-700"
            >
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 font-sans text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-sans text-sm font-medium text-gray-700"
            >
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 font-sans text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-sans text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block font-sans text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              {...register("company")}
              className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>

          <div>
            <label
              htmlFor="companyWebsite"
              className="block font-sans text-sm font-medium text-gray-700"
            >
              Company Website
            </label>
            <input
              type="url"
              id="companyWebsite"
              {...register("companyWebsite")}
              placeholder="https://example.com"
              aria-invalid={errors.companyWebsite ? "true" : "false"}
              aria-describedby={errors.companyWebsite ? "companyWebsite-error" : undefined}
              className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
            {errors.companyWebsite && (
              <p id="companyWebsite-error" className="mt-1 font-sans text-sm text-red-600">
                {errors.companyWebsite.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Project Type */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-6 font-serif text-xl font-semibold text-gray-900">
          Project Type <span className="text-accent">*</span>
        </h2>
        <div className="space-y-3">
          {projectTypes.map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="radio"
                id={`projectType-${type}`}
                value={type}
                {...register("projectType")}
                className="h-4 w-4 border-gray-300 text-accent focus:ring-accent"
              />
              <label
                htmlFor={`projectType-${type}`}
                className="ml-3 font-sans text-base text-gray-700"
              >
                {type}
              </label>
            </div>
          ))}
          {projectType === "Other" && (
            <div className="ml-7">
              <input
                type="text"
                {...register("projectTypeOther")}
                placeholder="Please specify"
                className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
          )}
          {errors.projectType && (
            <p className="mt-1 font-sans text-sm text-red-600">
              {errors.projectType.message}
            </p>
          )}
        </div>
      </div>

      {/* Timeline & Budget */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <label
            htmlFor="timeline"
            className="block font-sans text-sm font-medium text-gray-700"
          >
            Project Timeline <span className="text-accent">*</span>
          </label>
          <select
            id="timeline"
            {...register("timeline")}
            aria-invalid={errors.timeline ? "true" : "false"}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <option value="">Select timeline</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
          {errors.timeline && (
            <p id="timeline-error" className="mt-1 font-sans text-sm text-red-600">
              {errors.timeline.message}
            </p>
          )}
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <label
            htmlFor="budgetRange"
            className="block font-sans text-sm font-medium text-gray-700"
          >
            Budget Range <span className="text-accent">*</span>
          </label>
          <select
            id="budgetRange"
            {...register("budgetRange")}
            aria-invalid={errors.budgetRange ? "true" : "false"}
            aria-describedby={errors.budgetRange ? "budgetRange-error" : undefined}
            className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.budgetRange && (
            <p id="budgetRange-error" className="mt-1 font-sans text-sm text-red-600">
              {errors.budgetRange.message}
            </p>
          )}
        </div>
      </div>

      {/* Target Audience */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <label
          htmlFor="targetAudience"
          className="block font-sans text-sm font-medium text-gray-700"
        >
          Target Audience <span className="text-accent">*</span>
        </label>
        <p className="mt-1 font-sans text-xs text-gray-500">
          Who is your target audience?
        </p>
        <textarea
          id="targetAudience"
          rows={4}
          {...register("targetAudience")}
          placeholder="Example: Small business owners, age 30-50, looking for accounting services"
          aria-invalid={errors.targetAudience ? "true" : "false"}
          aria-describedby={errors.targetAudience ? "targetAudience-error" : undefined}
          className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
        {errors.targetAudience && (
          <p id="targetAudience-error" className="mt-1 font-sans text-sm text-red-600">
            {errors.targetAudience.message}
          </p>
        )}
      </div>

      {/* Main Goals */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-serif text-xl font-semibold text-gray-900">
          Main Goals <span className="text-accent">*</span>
        </h2>
        <p className="mb-4 font-sans text-sm text-gray-600">
          Select all that apply
        </p>
        <div className="space-y-3">
          {mainGoals.map((goal) => (
            <div key={goal} className="flex items-center">
              <input
                type="checkbox"
                id={`goal-${goal}`}
                value={goal}
                checked={mainGoalsSelected.includes(goal)}
                onChange={(e) => {
                  const current = mainGoalsSelected;
                  if (e.target.checked) {
                    setValue("mainGoals", [...current, goal]);
                  } else {
                    setValue("mainGoals", current.filter((g) => g !== goal));
                  }
                }}
                className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
              />
              <label
                htmlFor={`goal-${goal}`}
                className="ml-3 font-sans text-base text-gray-700"
              >
                {goal}
              </label>
            </div>
          ))}
          {mainGoalsSelected.includes("Other") && (
            <div className="ml-7">
              <input
                type="text"
                {...register("mainGoalsOther")}
                placeholder="Please specify"
                className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
          )}
          {errors.mainGoals && (
            <p className="mt-1 font-sans text-sm text-red-600">
              {errors.mainGoals.message}
            </p>
          )}
        </div>
      </div>

      {/* Required Features */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-serif text-xl font-semibold text-gray-900">
          Required Features <span className="text-accent">*</span>
        </h2>
        <p className="mb-4 font-sans text-sm text-gray-600">
          Select all that apply
        </p>
        <div className="space-y-3">
          {requiredFeatures.map((feature) => (
            <div key={feature} className="flex items-center">
              <input
                type="checkbox"
                id={`feature-${feature}`}
                value={feature}
                checked={requiredFeaturesSelected.includes(feature)}
                onChange={(e) => {
                  const current = requiredFeaturesSelected;
                  if (e.target.checked) {
                    setValue("requiredFeatures", [...current, feature]);
                  } else {
                    setValue("requiredFeatures", current.filter((f) => f !== feature));
                  }
                }}
                className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
              />
              <label
                htmlFor={`feature-${feature}`}
                className="ml-3 font-sans text-base text-gray-700"
              >
                {feature}
              </label>
            </div>
          ))}
          {requiredFeaturesSelected.includes("Other") && (
            <div className="ml-7">
              <input
                type="text"
                {...register("requiredFeaturesOther")}
                placeholder="Please specify"
                className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
          )}
          {errors.requiredFeatures && (
            <p className="mt-1 font-sans text-sm text-red-600">
              {errors.requiredFeatures.message}
            </p>
          )}
        </div>
      </div>

      {/* Design Preferences */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <label
          htmlFor="designPreferences"
          className="block font-sans text-sm font-medium text-gray-700"
        >
          Design Preferences
        </label>
        <p className="mt-1 font-sans text-xs text-gray-500">
          Do you have brand guidelines or style preferences? Any websites you like as inspiration?
        </p>
        <textarea
          id="designPreferences"
          rows={4}
          {...register("designPreferences")}
          placeholder="Describe your preferred style or paste URLs of websites you admire"
          maxLength={500}
          className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
      </div>

      {/* Content Status */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-6 font-serif text-xl font-semibold text-gray-900">
          Content <span className="text-accent">*</span>
        </h2>
        <div className="space-y-3">
          {contentStatuses.map((status) => (
            <div key={status} className="flex items-center">
              <input
                type="radio"
                id={`contentStatus-${status}`}
                value={status}
                {...register("contentStatus")}
                className="h-4 w-4 border-gray-300 text-accent focus:ring-accent"
              />
              <label
                htmlFor={`contentStatus-${status}`}
                className="ml-3 font-sans text-base text-gray-700"
              >
                {status}
              </label>
            </div>
          ))}
          {errors.contentStatus && (
            <p className="mt-1 font-sans text-sm text-red-600">
              {errors.contentStatus.message}
            </p>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <label
          htmlFor="additionalInfo"
          className="block font-sans text-sm font-medium text-gray-700"
        >
          Additional Information
        </label>
        <p className="mt-1 font-sans text-xs text-gray-500">
          Any other details about your project?
        </p>
        <textarea
          id="additionalInfo"
          rows={4}
          {...register("additionalInfo")}
          placeholder="Share any additional requirements, concerns, or questions"
          maxLength={500}
          className="mt-2 w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-sans text-base transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full rounded-lg bg-[#1a202c] px-8 py-3 font-sans text-base font-medium text-white transition-colors hover:bg-[#1a202c]/90 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Request"}
        </button>
      </div>
    </form>
  );
}
