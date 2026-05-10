"use client";

import { supabaseAdmin } from "@/lib/supabase/server";
import { useState } from "react";


type VolunteerFormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  wants_yard_sign: boolean;
  voter_registration_assistance: boolean;
  election_day_support: boolean;
  yard_sign_distribution: boolean;
  flyer_distribution: boolean;
  social_media_support: boolean;
  availability_notes: string;
};

const initialFormData: VolunteerFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  street: "",
  city: "",
  state: "TN",
  zip_code: "",
  wants_yard_sign: false,
  voter_registration_assistance: false,
  election_day_support: false,
  yard_sign_distribution: false,
  flyer_distribution: false,
  social_media_support: false,
  availability_notes: "",
};

export const Volunteer = () => {
  const [formData, setFormData] =
    useState<VolunteerFormData>(initialFormData);

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const supabase = supabaseAdmin

    try {
      const { error } = await supabase.from("volunteers").insert([
        {
          full_name: formData.first_name.trim() + " " + formData.last_name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone_number: formData.phone_number.trim() || null,
          street: formData.street.trim() || null,
          city: formData.city.trim() || null,
          state: formData.state.trim() || "TN",
          zip_code: formData.zip_code.trim() || null,
          wants_yard_sign: formData.wants_yard_sign,
          voter_registration_assistance:
            formData.voter_registration_assistance,
          election_day_support: formData.election_day_support,
          yard_sign_distribution: formData.yard_sign_distribution,
          flyer_distribution: formData.flyer_distribution,
          social_media_support: formData.social_media_support,
          availability_notes:
            formData.availability_notes.trim() || null,
          signup_source: "website",
        },
      ]);

      if (error) {
        throw error;
      }

      setSuccessMessage(
        "Thank you for joining the campaign. We will be in touch soon."
      );

      setFormData(initialFormData);
    } catch (error: any) {
      console.error("Volunteer form submission error:", error);

      if (error?.code === "23505") {
        setErrorMessage(
          "This email is already registered as a volunteer."
        );
      } else {
        setErrorMessage(
          "Something went wrong while submitting the form. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="volunteer"
      className="w-full lg:w-1/2 bg-[#0B0F19] text-white p-12 md:p-24 flex flex-col justify-center"
    >
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
        Join The <span className="text-[#FFB800]">Movement.</span>
      </h2>

      <p className="text-slate-400 font-medium mb-12 text-lg">
        A campaign is only as strong as its community. Sign up to knock
        doors, make calls, or host a yard sign. Your time makes the
        difference.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-md"
      >
        <input
          name="first_name"
          type="text"
          placeholder="First Name"
          required
          value={formData.first_name}
          onChange={handleInputChange}
          className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] font-bold"
        />

        <input
          name="last_name"
          type="text"
          placeholder="Last Name"
          required
          value={formData.last_name}
          onChange={handleInputChange}
          className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] font-bold"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] font-bold"
        />

        <input
          required
          name="street_address"
          type="text"
          placeholder="Street Address"
          value={formData.street}
          onChange={handleInputChange}
          className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] font-bold"
        />


        <input
          required
          name="zip_code"
          type="text"
          placeholder="ZIP Code"
          value={formData.zip_code}
          onChange={handleInputChange}
          className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] font-bold"
        />

        <input
          name="phone_number"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleInputChange}
          className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] font-bold"
        />

        <textarea
          name="availability_notes"
          placeholder="Availability Notes (optional)"
          rows={4}
          value={formData.availability_notes}
          onChange={handleInputChange}
          className="w-full bg-slate-800/50 border border-slate-700 text-white p-4 focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] font-bold resize-none"
        />

        <div className="bg-slate-800/50 border border-slate-700 p-4 space-y-4">
          <p className="text-xl font-bold">
            Volunteer Interests
          </p>

          {[
            {
              name: "wants_yard_sign",
              label: "I Want A Yard Sign",
            },
            {
              name: "voter_registration_assistance",
              label: "Voter Registration Assistance",
            },
            {
              name: "election_day_support",
              label: "Poll Worker / Election Day Support",
            },
            {
              name: "yard_sign_distribution",
              label: "Yard Sign Distribution",
            },
            {
              name: "flyer_distribution",
              label: "Flyer / Literature Distribution",
            },
            {
              name: "social_media_support",
              label: "Social Media Support",
            },
          ].map((item) => (
            <label
              key={item.name}
              className="flex items-center justify-between"
            >
              <span className="text-slate-300">
                {item.label}
              </span>

              <input
                type="checkbox"
                name={item.name}
                checked={
                  formData[
                    item.name as keyof VolunteerFormData
                  ] as boolean
                }
                onChange={handleInputChange}
                className="hover:cursor-pointer "
              />
            </label>
          ))}
        </div>

        {successMessage && (
          <p className="text-green-400 text-sm">
            {successMessage}
          </p>
        )}

        {errorMessage && (
          <p className="text-red-400 text-sm">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FFB800] hover:bg-white hover:cursor-pointer text-[#0B0F19] font-black uppercase tracking-widest py-4 transition-colors shadow-[4px_4px_0px_#E53935] disabled:opacity-50"
        >
          {loading ? "Submitting..." : "I'm In"}
        </button>
      </form>
    </div>
  );
};