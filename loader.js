'use client';

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('https://scontent')) return src;
  return `https://s3.us-east-2.amazonaws.com/davidadrianhair.com${src}?${width}&q=${
    quality || 75
  }`;
}
