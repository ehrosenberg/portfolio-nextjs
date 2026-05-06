import { projects } from "@/data/projects";

export default function sitemap() {
    let pages = [
        {
            url: 'https://portfolio-nextjs-sand-nu.vercel.app/',
            lastModified: new Date(2026, 4, 22),
        },
        {
            url: 'https://portfolio-nextjs-sand-nu.vercel.app/projects',
            lastModified: new Date(2026, 4, 29),
        },
    ]

    for (let i = 0; projects.length > i; i++) {
        pages.push({
            url: `https://portfolio-nextjs-sand-nu.vercel.app/projects/${projects[i].slug}`,
            lastModified: new Date(2026, 4, 29),
        })
    }

    return pages;
}