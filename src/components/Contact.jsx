import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Contact</h2>
        <p className="mt-2 text-muted-foreground">Let’s build something great together.</p>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <motion.a
            href="mailto:ryan@example.com"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="group flex items-center gap-3 rounded-xl border border-border p-5 hover:bg-muted/40"
          >
            <Mail className="h-5 w-5" />
            <div>
              <div className="font-medium text-foreground">Email</div>
              <div className="text-sm text-muted-foreground group-hover:underline">ryan@example.com</div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="group flex items-center gap-3 rounded-xl border border-border p-5 hover:bg-muted/40"
          >
            <Linkedin className="h-5 w-5" />
            <div>
              <div className="font-medium text-foreground">LinkedIn</div>
              <div className="text-sm text-muted-foreground group-hover:underline">linkedin.com/in/ryan</div>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-3 rounded-xl border border-border p-5 hover:bg-muted/40"
          >
            <Github className="h-5 w-5" />
            <div>
              <div className="font-medium text-foreground">GitHub</div>
              <div className="text-sm text-muted-foreground group-hover:underline">github.com/ryan</div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
