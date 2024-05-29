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
      <div className="h-full flex flex-col lg:flex-row text-xl items-center justify-around p-2 md:p-10">
        <div className="h-full w-full md:w-1/2 relative  md:m-10">
          <Image src="/hero.png" alt="" fill className="object-scale-down" />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-8 items-center justify-center bg-yellow-500/90 p-5 rounded-md ring-2 ring-yellow-200 shadow-2xl">
          <h1 className="text-2xl md:text-6xl font-bold">
            Transform Your Look with Expert Styling
          </h1>
          <p className="text-ms md:text-xl">
            I believe every client deserves a style that not only looks amazing
            but feels authentically you. I blend artistry with the latest
            techniques to bring your vision to life. From chic cuts to vibrant
            colors, Im dedicated to transforming your look with expert precision
            and personalized care. Step into my salon and step out with
            confidence—because when you look great, you feel unstoppable.
          </p>
          <div className="w-full flex gap-4">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-stone-950 bg-stone-950 text-stone-200"
            >
              View my Work
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-lg ring-1 ring-stone-950"
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
