import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCitiesData } from "./useAddedCitiesData";

export function AddCity() {
  const queryClient = useQueryClient();

  const { mutate: addCityData, isLoading: isAddingCity } = useMutation({
    mutationFn: addCitiesData,
    onSuccess: () => {
      console.log(`SUCCESSSS`);
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });

  return { addCityData, isAddingCity };
}
