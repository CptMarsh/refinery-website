// The Marsh Refinery — UI Kit: Marketing Website
// Pixel-fidelity recreation of the live marketing site,
// composable as small JSX components.

const ASSET = '../../assets';

// ---------- Atoms ----------

function Ornament({ width = 64, opacity = 0.4 }) {
  return (
    <div className="tmr-ornament" style={{ opacity }}>
      <div className="tmr-ornament__line" style={{ width }} />
      <div className="tmr-ornament__diamond" />
      <div className="tmr-ornament__line" style={{ width }} />
    </div>
  );
}

function Button({ children, variant = 'primary', wide = false, onClick, href = '#' }) {
  const cls =
    'tmr-btn ' +
    (variant === 'ghost' ? 'tmr-btn--ghost' : 'tmr-btn--primary') +
    (wide ? ' tmr-btn--wide' : '');
  return (
    <a className={cls} href={href} onClick={onClick}>{children}</a>
  );
}

function Tag({ children }) {
  return <span className="tmr-tag">{children}</span>;
}

function Eyebrow({ children }) {
  return <p className="tmr-eyebrow">{children}</p>;
}

function MetaLabel({ children }) {
  return <p className="tmr-meta">{children}</p>;
}

// Background stack: dust + dark overlay + vignette
function BackgroundLayers({ withVideo = false, videoSrc, withOverlay = true, withVignette = true }) {
  return (
    <>
      <div className="tmr-bg" />
      {withVideo && (
        <iframe
          className="tmr-bg-video"
          src={videoSrc}
          title="Background video"
          allow="autoplay; fullscreen"
        />
      )}
      <div className="tmr-bg-dust" />
      {withOverlay && <div className="tmr-bg-overlay" />}
      {withVignette && <div className="tmr-bg-vignette" />}
    </>
  );
}

// ---------- Composed sections ----------

function Navbar() {
  return (
    <nav className="tmr-nav">
      <div className="tmr-nav__left">
        <img className="tmr-nav__logo" src={`${ASSET}/studio-barrel-cream.png`} alt="The Marsh Refinery" />
        <span className="tmr-nav__name">THE MARSH REFINERY</span>
      </div>
      <a className="tmr-nav__cta" href="#wishlist">Wishlist</a>
    </nav>
  );
}

function HeroSection({ onLearnMore }) {
  return (
    <section className="tmr-hero">
      <BackgroundLayers
        withVideo
        videoSrc="https://www.youtube.com/embed/6U25BAluFvc?autoplay=1&mute=1&loop=1&playlist=6U25BAluFvc&controls=0&disablekb=1&modestbranding=1"
      />
      <div className="tmr-hero__inner">
        <Ornament />
        <h1 className="tmr-hero__title">GRAVEKEEPERS</h1>
        <Ornament opacity={0.3} />
        <p className="tmr-hero__tagline">Make it through the night. Or don't.</p>
        <div className="tmr-hero__cta">
          <Button wide onClick={(e) => { e.preventDefault(); onLearnMore?.(); }}>Learn More</Button>
        </div>
      </div>
      <div className="tmr-hero__scroll">
        <span>Descend</span>
        <div className="tmr-hero__scroll-line" />
      </div>
    </section>
  );
}

function GameTeaser() {
  return (
    <section id="gravekeepersgame" className="tmr-teaser">
      <div className="tmr-bg-dust" />
      <div className="tmr-teaser__grid">
        <div className="tmr-teaser__art">
          <img src={`${ASSET}/gravekeepers-keyart.png`} alt="Gravekeepers key art" />
        </div>
        <div className="tmr-teaser__info">
          <div className="tmr-teaser__tags">
            <Tag>Co-op</Tag>
            <Tag>Horror</Tag>
          </div>
          <h2 className="tmr-teaser__title">Gravekeepers</h2>
          <div className="tmr-rule" />
          <div className="tmr-teaser__body">
            <p>You're maintenance workers in a haunted graveyard.</p>
            <p>Do your job, survive the night, extract alive.</p>
            <p>But don't worry — even if you die, you're still in the game!</p>
          </div>
          <div className="tmr-teaser__meta">
            <div>
              <MetaLabel>Status</MetaLabel>
              <p className="tmr-strong">Seeking funding</p>
            </div>
            <div>
              <MetaLabel>Links</MetaLabel>
              <div className="tmr-teaser__links">
                <a href="#" className="tmr-link">Playable build on itch.io</a>
                <a href="#" className="tmr-link">Pitch Deck</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSignup() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (email) setSubmitted(true); };
  return (
    <section id="wishlist" className="tmr-news">
      <div className="tmr-news__topRule" />
      <div className="tmr-news__inner">
        <Ornament width={40} opacity={0.5} />
        <Eyebrow>Punch In</Eyebrow>
        <h2 className="tmr-news__title">Follow the Dig</h2>
        <p className="tmr-news__lede">
          Get dispatches from the Refinery — dev logs, reveals, release dates.
        </p>
        {!submitted ? (
          <form className="tmr-news__form" onSubmit={submit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Notify Me</button>
          </form>
        ) : (
          <div className="tmr-news__done">
            <div className="tmr-news__check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
            </div>
            <p>You're on the list. Dispatches to follow.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function StudioFooter() {
  const Mail = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
  const LinkedIn = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
  const YT = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>);
  const Discord = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>);
  const links = [
    { label: 'Email', icon: <Mail /> },
    { label: 'LinkedIn', icon: <LinkedIn /> },
    { label: 'YouTube', icon: <YT /> },
    { label: 'Discord', icon: <Discord /> },
  ];
  return (
    <footer className="tmr-footer">
      <div className="tmr-footer__group">
        <span className="tmr-footer__heading">Contact</span>
        <div className="tmr-footer__icons">
          {links.map((l) => (
            <a key={l.label} aria-label={l.label} href="#">{l.icon}</a>
          ))}
        </div>
      </div>
      <div className="tmr-footer__rule" />
      <div className="tmr-footer__group">
        <div className="tmr-footer__brand">
          <img src={`${ASSET}/studio-barrel-cream.png`} alt="" />
          <span>The Marsh Refinery</span>
        </div>
        <p className="tmr-footer__copy">© {new Date().getFullYear()} The Marsh Refinery. All rights reserved.</p>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Ornament, Button, Tag, Eyebrow, MetaLabel, BackgroundLayers,
  Navbar, HeroSection, GameTeaser, NewsletterSignup, StudioFooter,
});
