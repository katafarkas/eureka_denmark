"use client";

import CRYSTALS from "../../assets/images/crystals/crystals_1.jpg";
import SWEATERS from "../../assets/images/sweaters/sweaters_6.jpg";
import HEALING from "../../assets/images/healing/meditation_3.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-secondary-200 py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-5xl font-bold font-alexbrush mb-4">About</h3>
        <h5>
          Eureka Denmark is a dream of a designer who is passionate for artisan
          luxurious fashion pieces such as knitwear and handmade jewelry
          collection.
        </h5>
        <div className="flex justify-between">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image alt="Sweaters" src={SWEATERS} height={250} width={300} />
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">Sweaters</p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image alt="Crystals" src={CRYSTALS} height={250} width={300} />
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">Crystals</p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image alt="Healing" src={HEALING} height={250} width={300} />
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">Healing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
