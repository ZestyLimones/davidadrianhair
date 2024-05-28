'use client';

import FooterLink from './FooterLink';

const navLinks = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const socialLinks = [
  { url: 'facebook.com', title: 'Facebook' },
  { url: 'instagram.com', title: 'Instagram' },
];

const contactLinks = [
  {
    url: 'mailto:davidadrianhair@gmail.com',
    title: 'davidadrianhair@gmail.com',
  },
  {
    url: 'http://google.com/maps',
    title: 'Denver, CO',
  },
];

const Footer = () => {
  return (
    <div className="h-full flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl bg-stone-900 text-stone-200">
      <div className="flex flex-col ">
        <h2>Important Links</h2>
        {navLinks.map((link) => (
          <FooterLink link={link} key={link.title} />
        ))}
      </div>
      <div className="flex flex-col">
        <h2>Contact Info</h2>
        {contactLinks.map((link) => (
          <FooterLink link={link} key={link.title} />
        ))}
      </div>
      <div className="flex flex-col">
        <h2>Social Links</h2>
        {socialLinks.map((link) => (
          <FooterLink link={link} key={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
