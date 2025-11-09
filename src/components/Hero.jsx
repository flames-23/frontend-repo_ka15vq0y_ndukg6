import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onCTAClick }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  const titleX = useTransform(mouseX, [-200, 200], [-10, 10]);
  const titleY = useTransform(mouseY, [-200, 200], [-6, 6]);

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/80" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 flex flex-col items-start justify-center min-h-[90vh]">
        <motion.h1
          style={{ x: titleX, y: titleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-foreground"
        >
          Ryan Nur Hidayat
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-3 text-lg md:text-xl text-muted-foreground"
        >
          Frontend Developer | Flutter & ReactJS
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.2 }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
        >
          Crafting delightful digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 flex gap-3"
        >
          <button
            onClick={onCTAClick}
            className="rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition"
          >
            View Projects
          </button>
          <a
            href="#about"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted/40 transition"
          >
            About Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
