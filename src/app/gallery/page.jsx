'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

const url = `https://graph.instagram.com/me/media?fields=Id,caption,media_url,permalink&access_token=${accessToken}`;

const GalleryPage = () => {
  const [igData, setIgData] = useState([]);

  const fetchInstagramData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIgData(data.data);
      });
  };

  useEffect(() => {
    fetchInstagramData();
  }, []);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-auto w-full md:h-screen text-xl items-center p-2 md:p-10 justify-center items-center">
        <h1 className="font-bold text-4xl text-yellow-500 rounded-md underline decoration-yellow-200 text-center bg-stone-950/30 p-2">
          Check out My Work
        </h1>
        <div className="h-full flex flex-col lg:flex-row">
          <div className=" h-full w-full flex flex-col items m-2">
            <h2 className="font-bold text-4xl text-yellow-500 rounded-md underline decoration-yellow-200 text-center bg-stone-950/30 p-2">
              My Instagram
            </h2>
            <div className="flex flex-col lg:flex-row h-full gap-4">
              {igData.map((item) => (
                <div
                  className="p-5 w-full lg:w-1/3 h-3/4 bg-yellow-500 ring-2 ring-yellow-200 rounded-md"
                  key={item.id}
                >
                  <div className="h-full flex gap-8 text-stone-200 justify-center text-center ">
                    <Link
                      href={item.permalink}
                      className="relative"
                      target="_blank"
                    >
                      <div className="">
                        <Image
                          src={item.media_url}
                          alt={item.caption}
                          width={400}
                          height={400}
                          className="object-contain"
                        />
                      </div>
                      <p>Click to check out on the details on my Instagram</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryPage;
