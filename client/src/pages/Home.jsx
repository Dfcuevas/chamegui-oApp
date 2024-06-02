import { useState } from "react";
import CardsPet from "../components/cardsPet/CardsPet";
import Carousel from "../components/layout/Carousel";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import { CardsCarousel } from "../utils";
import RegisterModal from "../components/modal/RegisterModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <Hero openModal={handleOpenModal} />
      <CardsPet />
      {isModalOpen && <RegisterModal closeModal={handleCloseModal} />}
      <Carousel CardsCarousel={CardsCarousel} />
      <Footer />
    </>
  );
};

export default Home;
