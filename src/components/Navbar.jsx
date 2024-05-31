'use client';

import Link from 'next/link';
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import NavLink from './navLink';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/gallery', title: 'Gallery' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotation: 0,
      backgroundColor: 'rgb(231 229 228)',
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(231 229 228)',
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotation: 0,
      backgroundColor: 'rgb(231 229 228)',
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(231 229 228)',
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  // const listItemVariants = {
  //   closed: {
  //     x: -10,
  //     opacity: 0,
  //   },
  //   opened: {
  //     x: 0,
  //     opacity: 1,
  //   },
  // };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 text-stone-200">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-30 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-stone-200 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-stone-200 rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-stone-200 rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-stone-950 text-stone-200 flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <div className="" key={link.title}>
                <Link className="z-10" href={link.url}>
                  {link.title}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
