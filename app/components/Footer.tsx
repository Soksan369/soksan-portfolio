export default function Footer() {
  return (
    <footer className="w-full mt-16 py-6 bg-white/80 dark:bg-gray-950/90 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <span className="order-2 md:order-1">
          © {new Date().getFullYear()} Phork Soksan. All rights reserved.
        </span>
        <div className="flex gap-4 order-1 md:order-2">
          <a
            href="mailto:soksanphork@email.com"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <svg className="inline-block w-5 h-5 mr-1 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect width="20" height="16" x="2" y="4" rx="3" stroke="currentColor" strokeWidth="2" />
              <path stroke="currentColor" strokeWidth="2" d="M22 6l-10 7L2 6" />
            </svg>
            Email
          </a>
          <a
            href="https://github.com/Soksan369"
            target="_blank"
            rel="noopener"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <svg className="inline-block w-5 h-5 mr-1 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/phork-soksan-3b353130b"
            target="_blank"
            rel="noopener"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="inline-block w-5 h-5 mr-1 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="2" />
              <path stroke="currentColor" strokeWidth="2" d="M7 10v6M7 7v.01M11 10v6m0-3a3 3 0 016 0v3"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}