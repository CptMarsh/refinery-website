import { DotDust, linkClass, metaClass, tagClass } from "./brand";

export default function GameTeaser() {
  const tags = ["Co-op", "Horror"];

  return (
    <section id="gravekeepersgame" className="relative py-24 px-6 md:px-12">
      <DotDust />

      <div className="relative max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Key art: framed, never filled */}
        <div className="relative max-w-[380px] mx-auto w-full overflow-hidden border border-ink-edge shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          <img src="/gk-preview.png" alt="Gravekeepers key art" className="block w-full h-auto" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-left">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className={tagClass}>{tag}</span>
            ))}
          </div>

          <h2
            className="font-display font-black text-bone-200 leading-[1.1] uppercase"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", letterSpacing: "0.08em" }}
          >
            Gravekeepers
          </h2>

          <div className="w-12 h-px my-1 bg-moss-600/50" />

          <div className="font-body flex flex-col gap-1.5 text-bone-350 text-[1.35rem] leading-[1.45] italic">
            <p>You're maintenance workers in a haunted graveyard.</p>
            <p>Do your job, survive the night, extract alive.</p>
            <p>But don't worry — even if you die, you're still in the game!</p>
          </div>

          <div className="pt-2 flex flex-col gap-4">
            <div>
              <p className={`${metaClass} mb-1`}>Status</p>
              <p className="text-bone-300 font-semibold tracking-tight">Seeking funding</p>
            </div>

            <div>
              <p className={`${metaClass} mb-1`}>Links</p>
              <div className="flex flex-col gap-3 items-center md:items-start">
                <a
                  href="https://marsh-refinery.itch.io/gravekeepers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Playable build on itch.io
                </a>
                <a
                  href="/gravekeepers-pitch-deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Pitch Deck
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
