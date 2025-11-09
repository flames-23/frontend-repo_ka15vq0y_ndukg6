import { motion } from 'framer-motion';
import { Code2, Rocket, Wrench } from 'lucide-react';

const skills = [
  { name: 'Flutter', level: 90 },
  { name: 'ReactJS', level: 92 },
  { name: 'NextJS', level: 85 },
  { name: 'Go', level: 70 },
  { name: 'Blender', level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3">
          <Code2 className="h-5 w-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Skills</h2>
        </div>
        <p className="mt-2 text-muted-foreground">A snapshot of Ryan’s core technologies and proficiency.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-border p-5 bg-muted/30"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-foreground">{s.name}</div>
                <div className="text-sm text-muted-foreground">{s.level}%</div>
              </div>
              <div className="mt-3 h-2 rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-2 rounded-full bg-gradient-to-r from-primary to-foreground"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><Rocket className="h-4 w-4" /> Performance-focused</div>
          <div className="flex items-center gap-2"><Wrench className="h-4 w-4" /> Clean architecture</div>
          <div className="flex items-center gap-2"><Code2 className="h-4 w-4" /> Strong UI/UX sense</div>
        </div>
      </div>
    </section>
  );
}
