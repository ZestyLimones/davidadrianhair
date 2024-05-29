'use client';

import Link from 'next/link';

const FooterLink = ({ link }) => {
  return (
    <Link className="p-1 font-xs" href={link.url}>
      {link.title}
    </Link>
  );
};

export default FooterLink;
