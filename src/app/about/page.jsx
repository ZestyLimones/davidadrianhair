'use client';
import { motion } from 'framer-motion';

const skills = ['hair1', 'hair2', 'hair3', 'hair4', 'hair5', 'hair6'];

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">About me</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Skills</h1>
            <div className="flex gap-4 flex-wrap">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* Experince Item 1*/}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Job Title 1
                </div>
                <div className="p-3 text-sm italic">
                  Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Scelerisque varius morbi enim nunc
                  faucibus a pellentesque sit.
                </div>
                <div className="p3 text-red-400 text-sm font-semibold">
                  2000-2001
                </div>
                <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                  ABC Company
                </div>
              </div>
              {/* center */}
              <div className="w-1/6 ">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
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
              <div className="w-1/6 ">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Job Title 1
                </div>
                <div className="p-3 text-sm italic">
                  Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Scelerisque varius morbi enim nunc
                  faucibus a pellentesque sit.
                </div>
                <div className="p3 text-red-400 text-sm font-semibold">
                  2000-2001
                </div>
                <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                  ABC Company
                </div>
              </div>
            </div>
            {/* Experince Item 3*/}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Job Title 1
                </div>
                <div className="p-3 text-sm italic">
                  Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Scelerisque varius morbi enim nunc
                  faucibus a pellentesque sit.
                </div>
                <div className="p3 text-red-400 text-sm font-semibold">
                  2000-2001
                </div>
                <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                  ABC Company
                </div>
              </div>
              {/* center */}
              <div className="w-1/6 ">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3"></div>
            </div>
          </div>
        </div>

        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
