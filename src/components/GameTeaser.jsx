import { BackgroundLayers, MetaLabel, Tag, TextLink } from "@/components/brand";

export default function GameTeaser() {
  const tags = ["Co-op", "Horror"];

  return (
    <section id="gravekeepersgame" className="relative py-24 px-6 md:px-12">
      <BackgroundLayers overlay={false} />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Key art */}
        <div className="relative max-w-[380px] mx-auto md:mx-0 w-full overflow-hidden border border-ink-edge shadow-key-art">
          <img src="/gk-preview.png" alt="Gravekeepers key art" className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-left">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <h2 className="font-display font-black text-h1 text-bone-200 leading-[1.1] tracking-wide uppercase">
            Gravekeepers
          </h2>

          <div className="w-12 h-px bg-moss-600/50" />

          <div className="font-body italic text-[1.35rem] leading-[1.45] text-bone-350 space-y-1.5">
            <p>You’re maintenance workers in a haunted graveyard.</p>
            <p>Do your job, survive the night, extract alive.</p>
            <p>But don’t worry — even if you die, you’re still in the game!</p>
          </div>

          <div className="pt-2 space-y-4">
            <div>
              <MetaLabel>Status</MetaLabel>
              <p className="text-bone-300 font-semibold tracking-tight">Seeking funding</p>
            </div>

            <div>
              <MetaLabel>Links</MetaLabel>
              <div className="flex flex-col gap-3">
                <TextLink href="https://marsh-refinery.itch.io/gravekeepers" target="_blank" rel="noopener noreferrer">
                  Playable build on itch.io
                </TextLink>
                <TextLink href="/gravekeepers-pitch-deck.pdf" target="_blank" rel="noopener noreferrer">
                  Pitch Deck
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
