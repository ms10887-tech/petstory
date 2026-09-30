import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

type MetaPixelFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  push?: MetaPixelFn;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: MetaPixelFn;
    _fbq?: MetaPixelFn;
  }
}

const configuredPixelId = import.meta.env.VITE_META_PIXEL_ID?.trim() || "2266142897533892";
const PIXEL_ID = configuredPixelId && /^\d+$/.test(configuredPixelId) ? configuredPixelId : "";
export const META_PIXEL_ENABLED = Boolean(PIXEL_ID);
const CONSENT_KEY = "petstory-meta-advertising-consent";
let pixelInitialized = false;

function startPixel() {
  if (!PIXEL_ID || pixelInitialized) return;
  if (window.fbq) {
    window.fbq("init", PIXEL_ID);
    pixelInitialized = true;
    return;
  }

  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  }) as MetaPixelFn;
  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  fbq("init", PIXEL_ID);
  pixelInitialized = true;
}

export function trackGuideOfferClick() {
  if (!PIXEL_ID || typeof window === "undefined") return;
  if (localStorage.getItem(CONSENT_KEY) !== "accepted") return;
  window.fbq?.("trackCustom", "GuideOfferClick");
}

export function MetaTracking() {
  const location = useLocation();
  const [consent, setConsent] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!PIXEL_ID) return;
    setConsent(localStorage.getItem(CONSENT_KEY));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!PIXEL_ID || consent !== "accepted") return;
    startPixel();
    window.fbq?.("track", "PageView");
  }, [consent, location.pathname]);

  if (!PIXEL_ID || !ready || consent) return null;

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  return (
    <aside
      role="dialog"
      aria-label="Advertising cookie choice"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-[#D8D3C9] bg-white p-5 shadow-xl"
    >
      <p className="font-semibold text-[#1C1B1A]">Your privacy choice</p>
      <p className="mt-2 text-sm text-[#5B5854]">
        With your permission, we use the Meta Pixel to measure visits and clicks
        from our ads. It stays off if you decline. See our{" "}
        <Link to="/privacy" className="text-[#B8654A] underline">privacy policy</Link>.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("accepted")} className="btn-primary">
          Allow ad measurement
        </button>
        <button type="button" onClick={() => choose("declined")} className="btn-secondary">
          Decline
        </button>
      </div>
    </aside>
  );
}

export function resetAdvertisingChoice() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_KEY);
  window.location.reload();
}
