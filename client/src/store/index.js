import { create } from "zustand";

const useStore = create((set) => ({
  filterValue: "",
  setFilterValue: (filter) => set({ filterValue: filter }),
  filteredPets: [],
  setDataPets: (pets) => set({ filteredPets: pets }),
  setFilterByAge: (pets, value) => {
    if (value === "0") {
      const filter = pets.filter((item) => item.age >= 0 && item.age <= 2);
      set({ filteredPets: filter });
    }
  },
  setFilterByType: (pets, value) => {
    const filter = pets.filter((item) => item.animal_type === value);
    set({ filteredPets: filter });
  },
  setFilterByLocation: (pets, value) => {
    const filter = pets.filter((item) => item.location === value);
    set({ filteredPets: filter });
  },
  resetFilters: (data) => {
    set({ filteredPets: data });
    window.location.reload();
  },
}));

export default useStore;
