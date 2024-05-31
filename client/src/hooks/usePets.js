import { useQuery } from "@tanstack/react-query";
import fetchPetsData from "../services";

const usePets = () => {
  return useQuery({
    queryKey: ["pets"],
    queryFn: fetchPetsData,
  });
};

export default usePets;
