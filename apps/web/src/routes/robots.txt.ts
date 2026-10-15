import { siteOrigin } from '@/lib/site-origin.server';

export async function loader({ request }: { request: Request }) {
    const origin = siteOrigin(request);
    const content = `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
