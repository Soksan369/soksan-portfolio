import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">
          <div className="container mx-auto w-full px-2 sm:px-4 flex-1 flex flex-col">
            {children}
          </div>
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-24 pb-12 flex flex-col items-center justify-center min-h-[60vh] container mx-auto">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">{message}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">{details}</p>
      {stack && (
        <pre className="w-full max-w-2xl p-4 overflow-x-auto rounded bg-gray-100 dark:bg-gray-900 text-xs text-gray-800 dark:text-gray-200">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}