import { PenTool, Code2, LayoutGrid, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Logo systems, visual language and guidelines built to last beyond a single trend cycle.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Fast, accessible websites built on modern stacks — from marketing sites to full products.',
  },
  {
    icon: LayoutGrid,
    title: 'Product & UI/UX',
    desc: 'Interfaces designed around how people actually behave, not how a wireframe wants them to.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    desc: 'Campaigns and content systems that turn attention into measurable growth.',
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 bg-sand/20 dark:bg-paper/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-forest/70 dark:text-sand mb-3">
          What we do
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-xl">
          Services built around outcomes, not outputs.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-7 rounded-2xl border border-ink/10 dark:border-paper/15 bg-paper dark:bg-ink/40 hover:border-amber hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-forest flex items-center justify-center mb-5">
                <Icon size={20} className="text-paper" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-ink/70 dark:text-paper/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
