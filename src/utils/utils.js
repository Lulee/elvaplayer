export function toHttps(url) {
  if (typeof url !== 'string') return;
  return url.replace(/^http/gi, 'https');
}
