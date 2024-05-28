'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl justify-center items-center">
        <div className="lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-8 items-center justify-center bg-yellow-500/90 p-10 rounded-md border-2 border-yellow-200 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Transform Your Look with Expert Styling
          </h1>
          <p className="md:text-xl">
            I believe every client deserves a style that not only looks amazing
            but feels authentically you. I blend artistry with the latest
            techniques to bring your vision to life. From chic cuts to vibrant
            colors, I'm dedicated to transforming your look with expert
            precision and personalized care. Step into my salon and step out
            with confidence—because when you look great, you feel unstoppable.
          </p>
          <div className="w-full flex gap-4">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-stone-900 bg-stone-900 text-stone-200"
            >
              View my Work
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-lg ring-1 ring-stone-900"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
