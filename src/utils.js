export function normalizeUrl(url) {
    if (!url) return '';
    const trimmed = url.trim();
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
}

export function getDomainFromUrl(url) {
    try {
        const u = new URL(url);
        return u.hostname.replace(/^www\./, '');
    } catch {
        return url;
    }
}
