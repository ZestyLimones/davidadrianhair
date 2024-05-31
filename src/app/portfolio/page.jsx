'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Project 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://lama.dev',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Project 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://lama.dev',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Project 13',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://lama.dev',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Project 4',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://lama.dev',
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="bg-red-500" ref={ref}>
        <div className=" flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="">
          <div className="flex">
            <div className="h-screen w-screen flex items-center justify-center" />
            {items.map((item) => (
              <div className="" key={item.id}>
                <div className="flex flex-col gap-8 text-stone-200">
                  <Link href={item.link} className="flex justify-end">
                    {' '}
                    <div className="">
                      <Image src={item.img} alt="" height={50} width={50} />
                    </div>
                    <p className="">{item.desc}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-8xl">
            Schedule a consult call to get similar look!
          </h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Hairstylist / barber extraordinaire
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-stone-950 text-stone-200 rounded-full flex items-center justify-center"
            >
              Schedule Consult
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
