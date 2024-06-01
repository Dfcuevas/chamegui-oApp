import { useParams } from "react-router-dom";
import useStore from "../../store";
import { useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import GarlandDesktop from "../../assets/garland-separator-desktop.png";
import Chester from "../../assets/perrogrande.png";
import Perro from "../../assets/perro.png";
import Location from "../../assets/location-mark.png";
import BackButton from "../layout/BackButton";

const Details = () => {
  let { petId } = useParams();
  const { detailPet, filterPetById } = useStore();

  useEffect(() => {
    filterPetById(petId);
  }, []);

  return (
    <>
      <Navbar />
      <div className="col-start-1 col-span-4">
        <img
          src={GarlandDesktop}
          alt="Separador garland"
          className="max-w-screen-lg mx-auto"
        />
      </div>
      <BackButton />
      <section className="max-w-screen-lg mx-auto py-12 px-6 bg-bgGray rounded-xl mb-[91px]">
        <h2 className="text-4xl font-bold mb-12">{detailPet.name}</h2>
        <div className="flex gap-5 flex-col sm:flex-row">
          <div className="basis-8/12">
            <h3 className="text-lg font-bold mb-3">Edad aproximada</h3>
            <p className="text-base p-2 bg-indigo50 rounded-lg mb-6">
              {detailPet.age}
            </p>
            <h3 className="text-lg font-bold mb-3">Caracteristicas</h3>
            <p className="text-base p-2 bg-indigo50 rounded-lg mb-6">
              {detailPet.personality}
            </p>
            <h3 className="text-lg font-bold mb-3">Estado de salud</h3>
            <p className="text-base p-2 bg-indigo50 rounded-lg mb-6">
              {detailPet.health_status}
            </p>
            <h3 className="text-lg font-bold mb36">Requisitos</h3>
            <p className="text-base p-2 bg-indigo50 rounded-lg mb-6">
              Aca van los requisitos
            </p>
            <h3 className="text-lg font-bold mb-3">Mas informacion</h3>
            <p className="text-base p-2 bg-indigo50 rounded-lg mb-6">
              {detailPet.name} fue rescatado de una plaza luego de ser atacado
              por otros perros. Es juguetón y un gran compañero.
            </p>
          </div>
          <div className="rounded-xl shadow-custom pb-3 flex-grow">
            <div className="mb-4">
              <img
                className="w-full"
                src={Chester}
                alt={`Soy un ${detailPet.animal_type} y me llamo ${detailPet.name}`}
              />
            </div>
            <div className="pl-2">
              <p className="flex gap-5 text-sm mb-2">
                <img src={Perro} /> Macho
              </p>
              <p className="flex gap-5 text-sm">
                <img src={Location} /> {detailPet.location}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Details;
