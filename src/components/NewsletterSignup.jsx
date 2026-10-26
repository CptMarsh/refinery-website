import { useState } from "react";
import { Button, Eyebrow, Ornament } from "@/components/brand";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="wishlist" className="py-24 px-6 relative overflow-hidden">
      {/* Faint horizontal rule top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-ink-edge" />

      <div className="relative max-w-[600px] mx-auto flex flex-col items-center text-center">
        <Ornament width={40} opacity={0.5} className="mb-6" />

        <Eyebrow className="mb-4">Punch In</Eyebrow>
        <h2 className="text-[length:clamp(1.5rem,4vw,2.25rem)] font-black text-bone-200 mb-4 tracking-wider uppercase">Follow the Dig</h2>
        <p className="font-body italic text-[1.3rem] leading-[1.45] text-bone-350 mb-10">
          Get dispatches from the Refinery — dev logs, reveals, release dates.
        </p>

        {!submitted ? (
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
            <Button type="submit" className="whitespace-nowrap">Notify Me</Button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-5 h-5 border border-moss-600 flex items-center justify-center">
              <svg className="w-3 h-3 text-moss-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-bone-300 font-medium tracking-[0.04em]">You’re on the list. Dispatches to follow.</p>
          </div>
        )}
      </div>
    </section>
  );
}
