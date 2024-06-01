'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded-md p-1 ${
        pathName === link.url &&
        'bg-yellow-500 text-stone-950 ring-yellow-600 ring-2'
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
