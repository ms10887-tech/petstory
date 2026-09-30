import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SIGNUP_ACTION =
  "https://e4a79429.sibforms.com/serve/MUIFAOIK5XZMvQ1n_4dNoHrXduIgnc53dPRzUdEQAA3vL-4CnDTuvE-_cix1OIviJASkLzqTZpY9Q9A08eToS_vOIyMXxhPyriA1lWkzXXERB8KCH1qNyWejljxV3FVVu0lNCFHRGbJGWY5D1suXBYmKTwR65QB76d-V06s3Hdcs_QIBqGFwf-ykVLi3kCGKyOa4a52ZLbo5pJidhg==";

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .validator(
    z.object({
      email: z.email().max(254),
      website: z.string().max(200).optional(),
    }),
  )
  .handler(async ({ data }) => {
    // Quietly discard bot submissions that fill the hidden field.
    if (data.website) return { success: true };

    const body = new URLSearchParams({
      EMAIL: data.email.trim(),
      email_address_check: "",
      locale: "en",
      html_type: "simple",
    });

    try {
      const response = await fetch(SIGNUP_ACTION, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body,
        signal: AbortSignal.timeout(10000),
      });
      const result: unknown = await response.json();
      return {
        success:
          response.ok &&
          typeof result === "object" &&
          result !== null &&
          "success" in result &&
          result.success === true,
      };
    } catch (error) {
      console.error("Newsletter signup failed", error);
      return { success: false };
    }
  });
