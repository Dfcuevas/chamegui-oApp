import React, { useEffect } from "react";
import useStore from "../../store";
import usePets from "../../hooks/usePets";

/* eslint-disable react/prop-types */
const Filter = () => {
  const {
    filteredPets,
    setDataPets,
    setFilterByAge,
    resetFilters,
    setFilterByType,
    setFilterByLocation,
  } = useStore();
  const { data } = usePets();

  useEffect(() => {
    setDataPets(data);
  }, [resetFilters]);

  const dataPrueba = filteredPets
    .map((objeto) => objeto.location)
    .sort()
    .map((location) => data.find((objeto) => objeto.location === location));

  return (
    <div className="md:max-w-screen-lg mx-auto mb-8 text-center flex sm:max-w-screen-lg justify-center gap-5 flex-col sm:flex-row items-center">
      <div>
        <select
          name="filterByAge"
          id="filterByAge"
          onChange={(e) => setFilterByAge(dataPrueba, e.target.value)}
          className="p-3 rounded-xl bg-white border-indigo500 border"
        >
          <option value="" defaultValue={""}>
            Edad estimada
          </option>
          <option value={0}>0 - 2 años</option>
          <option value={4}>2 - 4 años</option>
          <option value={6}>4 - 6 años</option>
          <option value={7}>Mas de 6 años</option>
        </select>
      </div>
      <div>
        <select
          name="filterByLocation"
          id="filterByLocation"
          onChange={(e) => setFilterByLocation(dataPrueba, e.target.value)}
          className="p-3 rounded-xl bg-white border-indigo500 border"
        >
          <option value="">Ubicación</option>
          {dataPrueba.map((data) => (
            <React.Fragment key={data.id}>
              <option value={data.location}>{data.location}</option>
            </React.Fragment>
          ))}
        </select>
      </div>
      <div>
        <select
          name="filterByRace"
          id="filterByRace"
          onChange={(e) => setFilterByType(dataPrueba, e.target.value)}
          className="p-3 rounded-xl bg-white border-indigo500 border"
        >
          <option value="">Especie</option>
          <option value="Dog">Perro</option>
          <option value="Cat">Gato</option>
        </select>
      </div>
      <div>
        <button
          className="text-base font-bold text-gray900"
          onClick={() => resetFilters(data)}
        >
          Borrar filtros
        </button>
      </div>
    </div>
  );
};

export default Filter;
