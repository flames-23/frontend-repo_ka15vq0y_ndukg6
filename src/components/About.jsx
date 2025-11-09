import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">About</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I’m Ryan, a frontend developer focused on building clean, performant interfaces with a deep attention to detail. I enjoy turning complex problems into simple, elegant solutions — from mobile experiences with Flutter to web applications with React and Next.js.
            </p>
            <div className="mt-6">
              <a
                href="/cv.pdf"
                className="inline-flex items-center rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition"
                download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden bg-muted shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <div className="absolute inset-3 rounded-lg bg-muted" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Photo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
