"use server";

import { supabase } from "@/lib/supabase/server";

export async function submitVolunteer(formData: FormData) {
    const first_name = formData.get("first_name") as string;
    const last_name = formData.get("last_name") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const street = formData.get("street") as string;
    const zip_code = formData.get("zip_code") as string

    const wants_yard_sign = formData.get("wants_yard_sign") === "on";

    const voter_regristration_assistance = formData.get("voter_registration_assistance") === "on";

    const { error } = await supabase
        .from("volunteers")
        .insert([
            {
                first_name,
                last_name,
                email,
                phone_number,
                street,
                zip_code,
                wants_yard_sign,
                voter_regristration_assistance
            },
        ]);
}