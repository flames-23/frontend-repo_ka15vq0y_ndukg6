import { useEffect, useState, useRef } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [theme, setTheme] = useState('system');
  const projectsRef = useRef(null);

  // Theme handling: class-based dark mode
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top navigation with theme toggle */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur border-b border-border/60 bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Ryan NH</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted/60"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted/60" aria-label="Menu">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-16">
        <Hero onCTAClick={scrollToProjects} />
        <About />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <Skills />

        {/* Contact section inline (keeps total imported components to four) */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Contact</h2>
            <p className="mt-2 text-muted-foreground">Let’s build something great together.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <a
                href="mailto:ryan@example.com"
                className="group flex items-center gap-3 rounded-xl border border-border p-5 hover:bg-muted/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0120.25 19.5H3.75A2.25 2.25 0 011.5 17.25V6.75z" /><path d="M22.5 6.75l-10.5 6-10.5-6" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground group-hover:underline">ryan@example.com</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border p-5 hover:bg-muted/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM9 8h4.8v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24H9z"/></svg>
                <div>
                  <div className="font-medium text-foreground">LinkedIn</div>
                  <div className="text-sm text-muted-foreground group-hover:underline">linkedin.com/in/ryan</div>
                </div>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border p-5 hover:bg-muted/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.31 3.53 1 .11-.8.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.66-2.81 5.68-5.49 5.98.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.58A12 12 0 0012 .5z" clipRule="evenodd"/></svg>
                <div>
                  <div className="font-medium text-foreground">GitHub</div>
                  <div className="text-sm text-muted-foreground group-hover:underline">github.com/ryan</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">© {new Date().getFullYear()} Ryan Nur Hidayat. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
