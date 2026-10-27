import { useState } from "react";
import { Button, Ornament } from "@/components/brand";

// Public form URL from the "action" of the Kit form's HTML embed code.
const KIT_FORM_ACTION = "https://app.kit.com/forms/FORM_ID/subscriptions";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | guard
  const [error, setError] = useState("");
  const [guardUrl, setGuardUrl] = useState("");

  /** @param {import("react").FormEvent<HTMLFormElement>} e */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    setError("");

    const body = new FormData();
    body.append("email_address", email);

    try {
      const res = await fetch(KIT_FORM_ACTION, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      if (data.status === "success") {
        setStatus("done");
      } else if (data.status === "quarantined") {
        // Kit suspects a bot and asks for a human check on its own page.
        setGuardUrl(data.url);
        setStatus("guard");
      } else {
        throw new Error(data.errors?.messages?.[0]);
      }
    } catch (err) {
      setError((err instanceof Error && err.message) || "Something went wrong. Try again.");
      setStatus("idle");
    }
  };

  return (
    <section id="wishlist" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-[600px] mx-auto flex flex-col items-center text-center">
        <Ornament width={40} opacity={0.5} className="mb-6" />

        <h2 className="text-[length:clamp(1.5rem,4vw,2.25rem)] font-black text-bone-200 mb-4 tracking-wider uppercase">Stay in touch</h2>

        {status === "done" ? (
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-5 h-5 border border-moss-600 flex items-center justify-center">
              <svg className="w-3 h-3 text-moss-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-bone-300 font-medium tracking-[0.04em]">Check your inbox to confirm. Dispatches to follow.</p>
          </div>
        ) : status === "guard" ? (
          <p className="py-4 text-bone-300 font-medium tracking-[0.04em]">
            One more step:{" "}
            <a href={guardUrl} target="_blank" rel="noopener noreferrer" className="text-moss-500 underline underline-offset-4 hover:text-bone-200 transition-colors duration-200">
              confirm you are human
            </a>
            .
          </p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-[480px]">
              <input
                type="email"
                aria-label="Email address"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 min-w-0 px-5 py-3 bg-ink-surface border border-ink-edge rounded-none text-sm text-bone-300 tracking-[0.04em] placeholder:text-ink-edge-3 focus:outline-none focus:border-moss-600 transition-colors duration-300"
              />
              <Button type="submit" disabled={status === "sending"} className="whitespace-nowrap disabled:opacity-50">
                {status === "sending" ? "Sending…" : "Notify Me"}
              </Button>
            </form>
            {error && <p role="alert" className="mt-4 text-sm text-rust tracking-[0.04em]">{error}</p>}
          </>
        )}
      </div>
    </section>
  );
}
