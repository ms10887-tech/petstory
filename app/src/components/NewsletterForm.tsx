const SIGNUP_URL =
  "https://e4a79429.sibforms.com/v2/serve/MUIFAOIK5XZMvQ1n_4dNoHrXduIgnc53dPRzUdEQAA3vL-4CnDTuvE-_cix1OIviJASkLzqTZpY9Q9A08eToS_vOIyMXxhPyriA1lWkzXXERB8KCH1qNyWejljxV3FVVu0lNCFHRGbJGWY5D1suXBYmKTwR65QB76d-V06s3Hdcs_QIBqGFwf-ykVLi3kCGKyOa4a52ZLbo5pJidhg==";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`mx-auto w-full max-w-[540px] ${compact ? "mt-6" : "mt-8"}`}>
      <iframe
        title="Subscribe to The Pet Story Co. newsletter"
        src={SIGNUP_URL}
        loading="lazy"
        className="h-[470px] w-full border-0 sm:h-[390px]"
      />
      <p className="mt-1 text-center text-xs text-[#5B5854]">
        Form not showing?{" "}
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#B8654A]"
        >
          Open the signup form
        </a>
        .
      </p>
    </div>
  );
}
