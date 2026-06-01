import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("team/:personSlug", "routes/team.$personSlug.tsx"),
] satisfies RouteConfig;
