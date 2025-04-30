import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("resume", "routes/resume.tsx"),
  route("projects", "routes/projects.tsx"),
  // route("blog", "routes/blog.tsx"), // Uncomment if you add a blog
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;