'use client';

import Link from 'next/link';

const FooterLink = ({ link }) => {
  return (
    <Link className="rounded p-1 font-sm" href={link.url}>
      {link.title}
    </Link>
  );
};

export default FooterLink;
