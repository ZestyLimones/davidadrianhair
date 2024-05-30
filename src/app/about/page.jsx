'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = ['hair1', 'hair2', 'hair3', 'hair4', 'hair5', 'hair6'];

const AboutPage = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {
    margin: '-100px',
    once: true,
  });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {
    margin: '-100px',
    once: true,
  });

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full lg:flex">
        <div className="flex flex-col gap-8 items-center justify-center ">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl text-yellow-500 p-5 rounded-md underline decoration-yellow-200">
              About me
            </h1>
            <p className="text-lg bg-yellow-500/90 p-5 rounded-md ring-2 ring-yellow-200 shadow-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div
            className="flex flex-col gap-12 justify-center bg-yellow-500/90 p-5 rounded-md ring-2 ring-yellow-200 shadow-2xl"
            ref={skillRef}
          >
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-stone-950 text-stone-200 hover:bg-stone-200 hover:text-stone-950"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
          <div
            className="flex flex-col gap-12 justify-center pb-48 bg-yellow-500/90 p-5 rounded-md ring-2 ring-yellow-200 shadow-2xl"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              className=""
            >
              {/* Experince Item 1*/}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  <div className="bg-stone-200 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Job Title 1
                  </div>
                  <div className="p-3 text-sm italic">
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit,
                  </div>
                  <div className="p3 text-red-400 text-sm font-semibold">
                    2000-2001
                  </div>
                  <div className="bg-stone-200 p-1 rounded text-sm font-semibold w-fit">
                    ABC Company
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-200 -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              {/* Experince Item 2*/}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6 flex justify-center ">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-200 -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  <div className="bg-stone-200 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Job Title 1
                  </div>
                  <div className="p-3 text-sm italic">
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Scelerisque varius morbi enim nunc
                    faucibus a pellentesque sit.
                  </div>
                  <div className="p3 text-red-400 text-sm font-semibold">
                    2000-2001
                  </div>
                  <div className="bg-stone-200 p-1 rounded text-sm font-semibold w-fit">
                    ABC Company
                  </div>
                </div>
              </div>
              {/* Experince Item 3*/}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  <div className="bg-stone-200 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Job Title 1
                  </div>
                  <div className="p-3 text-sm italic">
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Scelerisque varius morbi enim nunc
                    faucibus a pellentesque sit.
                  </div>
                  <div className="p3 text-red-400 text-sm font-semibold">
                    2000-2001
                  </div>
                  <div className="bg-stone-200 p-1 rounded text-sm font-semibold w-fit">
                    ABC Company
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-stone-200 -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
