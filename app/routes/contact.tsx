export default function Contact() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        <section className="w-full max-w-2xl mx-auto p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-950/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
              Contact Me
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl">
              I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
            </p>
            <form
              className="w-full flex flex-col gap-4"
              action="mailto:soksanphork@email.com"
              method="POST"
              encType="text/plain"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="mt-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
            <div className="flex gap-6 mt-6">
              <a
                href="mailto:soksanphork@email.com"
                className="text-gray-500 hover:text-blue-500 transition"
                aria-label="Email"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M4 4h16v16H4z" />
                  <path stroke="currentColor" strokeWidth="2" d="M4 4l8 8 8-8" />
                </svg>
              </a>
              <a
                href="https://github.com/Soksan369"
                target="_blank"
                rel="noopener"
                className="text-gray-500 hover:text-blue-500 transition"
                aria-label="GitHub"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/phork-soksan-3b353130b"
                target="_blank"
                rel="noopener"
                className="text-gray-500 hover:text-blue-500 transition"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    rx="5"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 10v6M7 7v.01M11 10v6m0-3a3 3 0 016 0v3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }