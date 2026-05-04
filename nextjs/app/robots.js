export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://portfolio-nextjs-sand-nu.vercel.app/sitemap.xml',
    }
}