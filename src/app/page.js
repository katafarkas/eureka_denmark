import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Crystals from "./Crystals";
import Navbar_2 from "./NavBar_2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <Navbar_2 />
        <Hero />
        <About />
        <Crystals />
      </div>
    </main>
  );
}
