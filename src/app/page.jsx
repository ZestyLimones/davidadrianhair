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
      <div className="h-auto md:h-screen sm:flex flex-col lg:flex-row text-xl items-center p-2 md:p-10">
        <div className="h-96 md:h-full w-full md:w-1/2 relative md:m-10 mb-5 ring-2 ring-yellow-200 rounded-md shadow-2xl">
          <Image src="/david.png" alt="" fill className="object-cover" />
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
              href="/gallery"
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
