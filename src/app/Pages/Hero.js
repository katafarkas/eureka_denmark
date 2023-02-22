"use client";

import Image from "next/image";
import BACKGROUND from "../../assets/images/background.png";
import GRAPHIC from "../../assets/images/graphics/flower_crystal_1.png";

const Hero = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${BACKGROUND.src})` }}
    >
      <div className="container mx-auto text-center">
        <p className="text-3xl mb-12 font-alexbrush">Craft the design</p>
        <div className="w-full flex justify-center mb-12">
          <Image alt="Logo" src={GRAPHIC} width={100} height={100} />
        </div>
        <h1 className="text-7xl font-bold font-alexbrush mb-4">
          Eureka Denmark
        </h1>
      </div>
    </section>
  );
};

export default Hero;
