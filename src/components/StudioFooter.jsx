import { socialLinks } from '@/data/socials';
import { BarrelMark } from './brand';

// LinkedIn is a personal link, so only /cptmarsh shows it.
const footerLinks = socialLinks.filter(({ label }) => label !== 'LinkedIn');

export default function StudioFooter() {
  return (
    <footer className="py-10 px-6 border-t border-ink-rule bg-ink-page font-ui">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">

        <div className="flex flex-col items-center gap-2">
          <span className="text-ink-edge3 text-[11px] tracking-wider uppercase">Contact</span>
          <div className="flex items-center gap-4">
            {footerLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-ink-edge2 hover:text-bone-400 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-16 h-px bg-ink-rule" />

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <BarrelMark className="w-6 h-6 text-bone-200 opacity-60" label="" />
            <span className="text-ink-edge3 text-[13px] tracking-wider uppercase">The Marsh Refinery</span>
          </div>
          <p className="text-ink-edge text-[11px] tracking-[0.04em]">
            © {new Date().getFullYear()} The Marsh Refinery. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
