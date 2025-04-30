export default function Footer() {
    return (
      <footer className="w-full mt-16 py-6 bg-white/80 dark:bg-gray-950/90 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-6">
          <span>
            © {new Date().getFullYear()} Phork Soksan. All rights reserved.
          </span>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:soksanphork@email.com"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              aria-label="Email"
            >
              Email
            </a>
            <a
              href="https://github.com/Soksan369"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/phork-soksan-3b353130b"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }