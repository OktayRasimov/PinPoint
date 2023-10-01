import { supabase } from "./supabaseClient";

export async function useGetAddedCitiesData() {
  let { data, error } = await supabase.from("addedCities").select("*");

  if (error) {
    console.log(error);
    throw new Error(`Cabins could not be loaded`);
  }

  return data;
}
