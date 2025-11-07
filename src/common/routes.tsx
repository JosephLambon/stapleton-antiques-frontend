export const ROUTES = {
    root: "/",
    contact: "/contact",
    antique: "/antique"
} as const;

export type RouteKey = keyof typeof ROUTES; // "root" | "about" | "contact"
export type RoutePath = typeof ROUTES[RouteKey];

export default ROUTES;