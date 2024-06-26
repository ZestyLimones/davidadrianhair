'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  'Precision hair cutting',
  'Layering',
  'texturizing',
  'special occasion styling',
  'Blowouts',
  'updos',
  'Hair coloring',
  'Highlights',
  'balayage',
  'ombre techniques',
  'Deep conditioning treatments',
  'Perms and relaxers',
];

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full lg:flex">
        <div className="flex flex-col gap-8 justify-center p-2 md:p-10">
          <div className="flex flex-col md:flex-row h-fit mb-5 gap-8">
            <div className="flex flex-col gap-4 justify-center h-96 h-full w-full lg:w-1/2">
              <h1 className="font-bold text-4xl text-stone-200 underline decoration-yellow-600">
                About me
              </h1>
              <div className="bg-yellow-500/90 p-5 rounded-md ring-2 ring-yellow-600 shadow-2xl">
                <h2 className="text-lg">Welcome to my Site!</h2>
                <p className="text-md">
                  Hi, I’m David, and I am thrilled to share my journey with you.
                  After honing my organizational and leadership skills as a
                  logistics coordinator, I decided to follow my true passion for
                  hairstyling—a love that has been with me since I first started
                  helping family members with their hair. Now, I am fully
                  immersed in my dream, currently taking courses at Pickens
                  Technical Collage and set to graduate next year.
                </p>
                <br />
                <h2 className="text-lg">My Philosophy</h2>
                <p className="text-md">
                  I have always believed that hair is a powerful form of
                  self-expression and that everyone deserves to feel confident
                  and beautiful. My philosophy centers around creating styles
                  that not only enhance natural beauty but also reflect
                  individual personalities. Even as I am learning, my goal
                  remains the same: to provide each client with a unique and
                  enjoyable experience, leaving them feeling revitalized and
                  confident.
                </p>
                <br />
                <h2 className="text-lg">Services Offered</h2>
                <p className="text-md">
                  As a budding stylist, I am excited to offer a variety of
                  services that I am mastering through my coursework and
                  hands-on practice. These include precision haircuts, coloring,
                  highlights, and special occasion styling. I also enjoy
                  providing hair treatments such as deep conditioning and scalp
                  care. My experience with family and friends has given me a
                  strong foundation, and I am continuously building on that with
                  professional training.
                </p>
                <br />
                <h2 className="text-lg">Continual Learning</h2>
                <p className="text-md">
                  The beauty industry is dynamic and ever-changing, and I am
                  committed to staying on the cutting edge. My education at
                  Pickens Technical Collage includes the latest trends and
                  techniques, and I regularly participate in workshops and
                  seminars to further expand my knowledge. This dedication
                  ensures that I am well-prepared to offer innovative and
                  stylish solutions to my clients.
                </p>
              </div>
            </div>
            <div className="h-96 md:h-full w-full md:w-1/2 relative md:m-10 mb-5 ring-2 ring-yellow-600 rounded-md shadow-2xl">
              <Image src="/david-2.png" alt="" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center h-96 h-full w-full lg:w-2/3">
            <h1 className="font-bold text-4xl text-stone-200 underline decoration-yellow-600 ">
              Skills
            </h1>
            <div className="flex gap-4 bg-yellow-500/90  rounded-md ring-2 ring-yellow-600 shadow-2xl">
              <table className="table-fixed border-separate border-spacing-2  ">
                <tbody>
                  <tr>
                    <td className="border-r-2 border-stone-200 text-stone-950">
                      Cutting and Styling:
                    </td>
                    <td className="text-stone-">
                      Precision hair cutting, Layering, Texturizing, Blowouts,
                      Updos, Special occasion styling
                    </td>
                  </tr>

                  <tr>
                    <td className="border-r-2 border-stone-200 text-stone-950">
                      Coloring:
                    </td>
                    <td className="text-stone-">
                      Hair coloring, Highlights, Balayage, Ombre techniques
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-stone-200 text-stone-950">
                      Chemical Treatments:
                    </td>
                    <td className="text-stone-950">
                      Perms and relaxers, Keratin treatments, Smoothing and
                      straightening treatments
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r-2 border-stone-200 text-stone-950">
                      Client Consultation:
                    </td>
                    <td className="text-stone-">
                      Conducting thorough consultations to understand client
                      needs and preferences, Providing personalized style
                      recommendations, Advising on hair care and maintenance
                      routines
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center h-96 h-full w-full lg:w-2/3">
            <h1 className="font-bold text-4xl text-stone-200 underline decoration-yellow-600">
              Education
            </h1>
            <div className="flex gap-4 bg-yellow-500/90 p-2 rounded-md ring-2 ring-yellow-600 shadow-2xl justify-between">
              <div className="p-2 text-lg">
                <h2 className="">
                  Pickens Technical Collage: Cosmotology Certification
                </h2>
              </div>
              <div className="p-2 text-md">
                <h2 className="">2025</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
