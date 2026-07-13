import { socialLinks } from '@/data/socials';

export default function StudioFooter() {
  return (
    <footer className="py-10 px-6 border-t border-[#1e1a14] bg-[#080808]">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">

        <div className="flex flex-col items-center gap-2">
          <span className="text-[#4a3f33] text-xs tracking-widest uppercase">Contact</span>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-[#3a3028] hover:text-[#8a7d6a] transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-16 h-px bg-[#1e1a14]" />

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span
              role="img"
              aria-label="The Marsh Refinery"
              className="inline-block w-6 h-6 shrink-0"
              style={{
                backgroundColor: "#4a3f33",
                WebkitMaskImage: `url(${import.meta.env.BASE_URL}studio-barrel.png)`,
                maskImage: `url(${import.meta.env.BASE_URL}studio-barrel.png)`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
            <span className="text-[#4a3f33] text-sm tracking-widest uppercase">The Marsh Refinery</span>
          </div>
          <p className="text-[#2a2218] text-xs tracking-wider">
            © {new Date().getFullYear()} The Marsh Refinery. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
