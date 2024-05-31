import CardsPet from "../components/cardsPet/CardsPet";
import Carousel from "../components/layout/Carousel";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import { CardsCarousel } from "../utils";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsPet />
      <Carousel CardsCarousel={CardsCarousel} />
      <Footer />
    </>
  );
};

export default Home;
