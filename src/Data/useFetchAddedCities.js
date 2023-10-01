import { useQuery } from "@tanstack/react-query";
import { useGetAddedCitiesData } from "./useAddedCitiesData";

export function GetCities() {
  const {
    isLoading,
    data: cities,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: useGetAddedCitiesData,
  });

  return { cities, error, isLoading };
}
