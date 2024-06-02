import HeroImage from "../../assets/image-hero.png";
import HeroImageDesktop from "../../assets/image-hero-desktop.png";
import PrimaryButton from "../common/PrimaryButton";
import GarlandDesktop from "../../assets/garland-separator-desktop.png";

const Hero = ({ openModal, closeModal }) => {
  return (
    <section className="flex flex-col px-5 gap-5 mb-8 md:mb-12 sm:grid sm:grid-cols-4 sm:grid-rows-[repeat(6,minmax(0,48px))] md:max-w-screen-lg md:mx-auto">
      <div className="sm:col-span-2 sm:row-span-4 sm:grid ">
        <h1 className="font-Lora font-bold text-[30px] italic leading-[45px] text-center mb-5 sm:text-5xl sm:text-left md:text-6xl sm:mb-0">
          Abraza a un nuevo amigo
        </h1>
        <p className="font-OpenSans text-center text-[14px] sm:text-md sm:text-left">
          Chameguiño facilita la conexion entre rescatistas y adoptantes con el
          fin de promover la adopción responsable
        </p>
      </div>
      <div className="sm:col-start-3 sm:col-span-2 sm:col-end-5 sm:row-start-1 sm:row-end-3 ">
        <img className="sm:hidden mx-auto" src={HeroImage} alt="Hero Image" />
        <img
          className="hidden sm:block mx-auto"
          src={HeroImageDesktop}
          alt="Hero Image desktop"
        />
      </div>
      {/* <div className="sm:col-start-1 sm:col-span-1 sm:row-span-1">
      </div> */}
      <PrimaryButton data="Unirme" openModal={openModal} />
      <div className="col-start-1 col-span-4">
        {/*   <img className="sm:hidden" src={Garland} alt="Separador garland" /> */}
        <img src={GarlandDesktop} alt="Separador garland" />
      </div>
    </section>
  );
};

export default Hero;
