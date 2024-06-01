import usePets from "../../hooks/usePets";
import Chester from "../../assets/chester.png";
import Timer from "../../assets/timer-sand.png";
import Location from "../../assets/location-mark.png";
import Filter from "../common/Filter";
import useStore from "../../store";
import { Link } from "react-router-dom";

const CardsPet = () => {
  const { error, isLoading } = usePets();

  const { filteredPets } = useStore();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="px-4 mb-32">
      <Filter />
      <div className="md:max-w-screen-lg mx-auto flex flex-wrap gap-5 justify-center">
        {filteredPets.map((pet) => (
          <Link key={pet.id} to={`/details/${pet.id}`}>
            <div className="rounded-xl shadow-custom pb-3 cursor-pointer">
              <div>
                <img
                  src={Chester}
                  alt={`Soy un ${pet.animal_type} y me llamo ${pet.name}`}
                />
              </div>
              <div className="pl-2">
                <h2 className="text-base text-center font-bold">{pet.name}</h2>
                <p className="flex gap-5 text-sm mb-2">
                  <img src={Timer} /> Aprox {pet.age}{" "}
                  {pet.age > 1 ? "años" : "año"} de edad
                </p>
                <p className="flex gap-5 text-sm">
                  <img src={Location} /> {pet.location}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CardsPet;
