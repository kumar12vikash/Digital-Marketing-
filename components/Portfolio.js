import Image from 'next/image';

const projects = [
  { title: 'Nordlys Coffee Rebrand', category: 'Branding', seed: 'forma-1' },
  { title: 'Atlas Fintech App', category: 'Product Design', seed: 'forma-2' },
  { title: 'Verdant Studio Website', category: 'Web Design', seed: 'forma-3' },
  { title: 'Kestrel Outdoor Gear', category: 'Branding', seed: 'forma-4' },
  { title: 'Loom & Co Marketing Site', category: 'Web Development', seed: 'forma-5' },
  { title: 'Pulse Wellness Campaign', category: 'Digital Marketing', seed: 'forma-6' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-forest/70 dark:text-sand mb-3">
          Selected work
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-xl">
          A few projects we&apos;re proud to have shipped.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.seed}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-ink/10 dark:border-paper/15"
            >
              <Image
                src={`https://picsum.photos/seed/${p.seed}/640/480`}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-300 flex items-end">
                <div className="p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs uppercase tracking-widest text-amber font-medium">
                    {p.category}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-paper">
                    {p.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
