'use client';

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('https://images.pexels.com')) return src;
  return `http://davidadrianhair.s3-website.us-east-2.amazonaws.com${src}?${width}&q=${
    quality || 75
  }`;
}
