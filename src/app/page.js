import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "./NavBar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Crystals from "./Crystals";
import Navbar_2 from "./Components/NavBar_2";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <Navbar_2 />
        <Hero />
        <About />
        <Crystals />
        <Footer />
      </div>
    </main>
  );
}
