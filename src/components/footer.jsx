'use client';

import FooterLink from './FooterLink';
import Link from 'next/link';

const navLinks = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/gallery', title: 'Gallery' },
  { url: '/contact', title: 'Contact' },
];

const socialLinks = [
  { url: 'https://www.facebook.com/david.villasenor.5851', title: 'Facebook' },
  { url: 'https://www.instagram.com/davidadrianhair', title: 'Instagram' },
];

const contactLinks = [
  {
    url: 'mailto:davidadrianhair@gmail.com',
    title: 'davidadrianhair@gmail.com',
  },
  {
    url: 'https://google.com/maps',
    title: 'Denver, CO',
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col bg-stone-950 text-stone-200 p-5">
      <div className="flex flex-col md:flex-row justify-around  bg-stone-950 text-stone-200 p-5">
        <div className="flex flex-col pb-8">
          <h2 className="font-semibold underline decoration-double">
            Important Links
          </h2>
          {navLinks.map((link) => (
            <FooterLink link={link} key={link.title} />
          ))}
        </div>
        <div className="flex flex-col pb-8">
          <h2 className="font-semibold underline decoration-double">
            Contact Info
          </h2>
          {contactLinks.map((link) => (
            <FooterLink link={link} key={link.title} />
          ))}
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold underline decoration-double">
            Social Links
          </h2>
          {socialLinks.map((link) => (
            <FooterLink link={link} key={link.title} target="_blank" />
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link href="https://www.github.com/zestylimones" target="_blank">
          <p className="text-xs text-stone-200">
            © 2024 ZestyLimones. All rights reserved.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
