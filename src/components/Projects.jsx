import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Interactive Dashboard',
    desc: 'Responsive analytics dashboard built with React, Zustand, and Tailwind.',
    tags: ['React', 'Tailwind'],
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Flutter Travel App',
    desc: 'Smooth animations and offline-first architecture for a travel planner.',
    tags: ['Flutter'],
    img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Next.js Commerce',
    desc: 'Headless storefront with server components and ISR.',
    tags: ['Next.js'],
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Go API Starter',
    desc: 'Fast REST API with clean architecture and OpenAPI docs.',
    tags: ['Go'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: '3D Portfolio',
    desc: 'Playful 3D interactions using Spline and Framer Motion.',
    tags: ['3D', 'Spline'],
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Blender Renders',
    desc: 'Stylized product shots and micro-animations for marketing.',
    tags: ['Blender'],
    img: 'https://images.unsplash.com/photo-1561212044-bac5ef688a07?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Projects</h2>
        <p className="mt-2 text-muted-foreground">A selection of work — hover to preview, click to learn more.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-xl overflow-hidden border border-border bg-muted/30 text-left"
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4">
                <div className="font-medium text-foreground">{item.title}</div>
                <div className="text-sm text-muted-foreground line-clamp-2">{item.desc}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-foreground/10 text-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="relative w-[92vw] max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={active.img} alt={active.title} className="h-60 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{active.title}</h3>
                  <p className="mt-2 text-muted-foreground">{active.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-foreground/10 text-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button onClick={() => setActive(null)} className="rounded-md border border-border px-4 py-2 text-sm hover:bg-muted/40">Close</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
