'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';
import Footer from './footer';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.pixelstalk.net/wp-content/uploads/2016/05/Black-and-Gold-Wallpapers-Images-Download.jpg')`,
        }}
      >
        <div
          key={pathName}
          // className="bg-gradient-to-br from-stone-200/50 from 10% via-yellow-500/70 via-30% to-stone-950/70 to-90%"
        >
          <motion.div
            className="h-screen w-screen fixed bg-stone-900 rounded-b-[100px] z-40"
            animate={{ height: '0vh' }}
            exit={{ height: '140vh' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-stone-200 text-8xl cursor-default z-50 w-fit h-fit"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {pathName.substring(1)}
          </motion.div>
          <motion.div
            className="h-screen w-screen fixed bg-stone-900 rounded-t-[100px] bottom-0 z-30"
            initial={{ height: '140vh' }}
            animate={{ height: '0vh', transition: { delay: 0.5 } }}
          />
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
