export default function About() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        <section className="w-full max-w-3xl mx-auto p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-950/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center gap-6">
            <img
              src="/soksan-portfolio/Image/soksan-profile.jpg"
              alt="Your Avatar"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
              style={{ objectFit: "cover" }}
            />
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-2xl">
              Hi! I'm <span className="font-semibold text-blue-500">Phork Soksan</span>, a passionate <span className="font-semibold text-purple-500">Junior Developer</span> based in Phnom Penh, Cambodia. I love building beautiful, performant web apps and exploring new technologies. My mission is to create digital experiences that make a difference.
            </p>
            <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 text-center">
              <span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:soksanphork@email.com"
                  className="text-blue-500 hover:underline"
                >
                  soksanphork@email.com
                </a>
              </span>
              <span>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Soksan369"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  github.com/Soksan369
                </a>
              </span>
              <span>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/phork-soksan-3b353130b"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  linkedin.com/in/phork-soksan-3b353130b
                </a>
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                React
              </span>
              <span className="px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium">
                NuxtJS
              </span>
              <span className="px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-sm font-medium">
                TailwindCSS
              </span>
              <span className="px-4 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
                Node.js
              </span>
            </div>
          </div>
        </section>
      </main>
    );
  }