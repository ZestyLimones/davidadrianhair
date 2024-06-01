'use client';

import Link from 'next/link';

const ContactBanner = () => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col items-center justify-center bg-yellow-500/90 p-5 rounded-md ring-2 ring-yellow-600 shadow-2x">
      <p className="text-lg">Want a stunning new style?</p>
      <h2 className="text-4xl text-stone-950 text-center p-2">
        Reach out today!
      </h2>
      <Link
        href="/contact"
        className="p-4 rounded-md ring-1 ring-stone-950 bg-stone-950 text-stone-200"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default ContactBanner;
