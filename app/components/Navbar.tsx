import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  // { name: "Blog", href: "/blog" }, // Uncomment if you add a blog
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight"
        >
          Phork Soksan
        </Link>
        <div className="flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium px-2 py-1 rounded transition-colors ${
                location.pathname === link.href
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}