'use client';
import ContactBanner from '@/components/contactBanner';
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
      <div className="h-auto w-full p-2 md:p-10 flex flex-col items-center gap-8">
        <h1 className="font-bold text-4xl text-stone-200 underline decoration-yellow-500 text-center p-2">
          From Vision to Reality: Recent Styles
        </h1>
        <div className="h-full flex flex-col lg:flex-row items-center">
          <div className="h-auto w-full flex flex-col items p-2 bg-yellow-500/90 shadow-2xl ring-2 ring-yellow-200 rounded-md">
            <h2 className="text-3xl text-stone-950 text-center p-2">
              Explore my latest work, directly from my&nbsp;
              <Link
                href="https://www.instagram.com/davidadrianhair"
                target="_blank"
                className="text-bold underline decoration-yellow-200 text-stone-200"
              >
                Instagram Feed
              </Link>
              . Click on any image to see the before and after photos to get
              inspired by these stunning transformations!
            </h2>
            <div className="flex flex-col lg:flex-row h-full gap-4 p-2">
              {igData.map((item) => (
                <div
                  className="p-5 w-full lg:w-1/3 h-auto bg-stone-950 ring-2 ring-yellow-200 rounded-md"
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
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactBanner />
      </div>
    </motion.div>
  );
};

export default GalleryPage;
