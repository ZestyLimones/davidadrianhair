import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      <div className="h-1/2"></div>
    </div>
  );
};

export default Homepage;
