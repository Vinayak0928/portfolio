export function siteOrigin(request: Request): string {
    const url = new URL(request.url);
    return `${url.protocol}//${url.host}`;
}
