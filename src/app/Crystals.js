import Products from "./Components/Products";
import IMG1 from "../assets/images/crystals/crystals_2.jpg";

const data = {
  title: "Unexpected second hobby to designing gemstone jewelries",
  text: "I had been sick for 3 years with different sicknesses until 2019 until I self-healed myself, example from a 16 cm tumor. I am the first case in Denmark. After this miacle experience, I wanted to learn more about alternative healing and mindfulness, therefore I spent my whole lockdown period to participate different courses.  \
  One of the course was crystal healing and crystal programming course. After the course I wanted to wear an outstanding gemstone bracelet what I use for crystal programming with a for my remain health problem.  At the shops I could only find a bracelet with the same color and kind gemstone. I did not want to spend money for a design which does not fit to my wardrobe as I wanted to wear all the time. It is important to have the programmed crystal within your aura for the efficient. So I bought different crystals and materials to desing my own bracelet which was unique. The bracelet helped me to heal of my remain health problem within 2 months after starting to wearing it. At the same time my friends started to ask me also to design for them gemstone bracelets, and after all their friends as well. So I realized I love to designing jewelries, and expand to new elements such as wirewrapped jewelries with gemstones. All in all, I had the idea to combine together these gemstone jewelries with my knitwear collection as they all connect to the natural sources and based on request as a bonus I could program specific information into each crystal beads. \
  Since I am living in Denmark, all designs are maden in Denmark, therefore Eureka Denmark was created by a believer designer who belived in supporting people's unique style and soul with her natural wardrobe elements. \
  ",
  image: IMG1,
};

const Crystals = () => {
  return <Products data={data} />;
};

export default Crystals;
