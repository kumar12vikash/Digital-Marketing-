export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-forest/70 dark:text-sand mb-4">
            Design &amp; Digital Studio
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
            We design brands
            <br />
            with <span className="text-amber">backbone</span>.
          </h1>
          <p className="mt-6 text-lg text-ink/70 dark:text-paper/70 max-w-md">
            Forma Studio partners with founders and teams to build identities,
            products and websites that hold up under scrutiny — and stand out
            in a crowded room.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-forest text-paper font-medium hover:bg-amber hover:text-ink transition-colors"
            >
              Start a project
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full border border-ink/20 dark:border-paper/30 font-medium hover:border-amber hover:text-amber transition-colors"
            >
              View our work
            </a>
          </div>
        </div>

        <div className="relative h-72 sm:h-80 md:h-96">
          <div className="absolute inset-0 rounded-4xl bg-forest rotate-3 dark:bg-sand/30" />
          <div className="absolute inset-0 rounded-4xl bg-amber -rotate-2 flex items-center justify-center shadow-xl">
            <span className="font-display text-8xl sm:text-9xl font-semibold text-ink/90">
              F
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
