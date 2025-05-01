import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Phork Soksan | Portfolio" },
    { name: "description", content: "Welcome to my personal portfolio website." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      <section className="w-full max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-950/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center gap-6">
          <img
            src="\Image\soksan-profile.jpg"
            alt="Your Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg mb-2"
            style={{ objectFit: "cover" }}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
            Hi, I'm Soksan
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-xl">
            A passionate <span className="font-semibold text-blue-500">Junior Developer</span> crafting beautiful, performant web experiences. Welcome to my digital space.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="/soksan-portfolio/resume"
              className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              View Resume
            </a>
            <a
              href="/soksan-portfolio/projects"
              className="px-6 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              View Projects
            </a>
          </div>
          <div className="flex gap-6 mt-6">
            <a href="mailto:soksanphork@email.com" className="text-gray-500 hover:text-blue-500 transition" aria-label="Email">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 4h16v16H4z"/><path stroke="currentColor" strokeWidth="2" d="M4 4l8 8 8-8"/></svg>
            </a>
            <a href="https://github.com/Soksan369" target="_blank" rel="noopener" className="text-gray-500 hover:text-blue-500 transition" aria-label="GitHub">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="https://linkedin.com/in/phork-soksan-3b353130b" target="_blank" rel="noopener" className="text-gray-500 hover:text-blue-500 transition" aria-label="LinkedIn">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" stroke="currentColor" strokeWidth="2" rx="5"/><path stroke="currentColor" strokeWidth="2" d="M7 10v6M7 7v.01M11 10v6m0-3a3 3 0 016 0v3"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}