import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/menu",
        "/about",
        "/events",
        "/private-events",
        "/contact",
        "/faq",
        "/blog",
    ];

    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : route === "/blog" ? "weekly" : "monthly",
        priority: route === "" ? 1 :
            route === "/menu" ? 0.9 :
                route === "/contact" ? 0.9 :
                    route === "/events" ? 0.8 :
                        route === "/private-events" ? 0.8 : 0.7,
    }));
}
