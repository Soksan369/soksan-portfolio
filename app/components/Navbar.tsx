import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const BASENAME = "/soksan-portfolio";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const currentPath = location.pathname.startsWith(BASENAME)
    ? location.pathname.slice(BASENAME.length) || "/"
    : location.pathname;

  // Close menu on navigation
  const handleNavClick = () => setOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight"
          onClick={handleNavClick}
        >
          Phork Soksan
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium px-2 py-1 rounded transition-colors ${
                currentPath === link.href
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Open menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg
            className={`w-6 h-6 transition-transform ${open ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-200 bg-white/95 dark:bg-gray-950/95 border-t border-gray-200 dark:border-gray-800 shadow ${
          open ? "max-h-96 py-2 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="flex flex-col gap-2 px-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              onClick={handleNavClick}
              className={`block font-medium px-2 py-2 rounded transition-colors ${
                currentPath === link.href
                  ? "text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-gray-900"
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