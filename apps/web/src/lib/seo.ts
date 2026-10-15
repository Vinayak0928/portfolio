interface SeoArgs {
    title: string;
    description?: string;
    image?: string;
}

export function seo(_routeData: any, { title, description, image }: SeoArgs) {
    const meta: Array<{ title?: string; name?: string; content?: string; property?: string }> = [
        { title },
        { property: 'og:title', content: title },
        { name: 'twitter:title', content: title },
    ];

    if (description) {
        meta.push(
            { name: 'description', content: description },
            { property: 'og:description', content: description },
            { name: 'twitter:description', content: description }
        );
    }

    if (image) {
        meta.push(
            { property: 'og:image', content: image },
            { name: 'twitter:image', content: image },
            { name: 'twitter:card', content: 'summary_large_image' }
        );
    }

    return meta;
}
