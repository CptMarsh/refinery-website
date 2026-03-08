import { useState } from "react";

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-[#2a2218]" />

      <div className="relative max-w-xl mx-auto text-center">
        {/* Ornamental header */}
        <div className="flex items-center justify-center gap-4 mb-6 opacity-50">
          <div className="w-10 h-px bg-[#6b8f4e]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#6b8f4e]" />
          <div className="w-10 h-px bg-[#6b8f4e]" />
        </div>

        <p className="text-[#6b8f4e] text-xs tracking-[0.4em] uppercase mb-4 font-medium">Bear Witness</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#d4c9b0] mb-4 tracking-widest uppercase">Follow Development</h2>
        <p className="text-[#8a7d6a] mb-10 leading-relaxed italic">
          Receive dispatches from The Marsh Refinery — dev logs, reveals, and release info.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3 bg-[#0d0b08] border border-[#2a2218] text-[#c8b89a] placeholder-[#4a3f33] focus:outline-none focus:border-[#4a7a35] transition-colors tracking-wide"
            />
            <button
              type="submit"
              className="px-8 py-3 border border-[#4a7a35] text-[#6b8f4e] hover:bg-[#4a7a35]/20 font-semibold tracking-widest uppercase text-sm transition-all duration-300 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-5 h-5 border border-[#4a7a35] flex items-center justify-center">
              <svg className="w-3 h-3 text-[#6b8f4e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-[#c8b89a] font-medium tracking-wide">The rites are recorded. We'll be in touch.</p>
          </div>
        )}
      </div>
    </section>
  );
}