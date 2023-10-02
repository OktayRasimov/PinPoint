import { supabase } from "./supabaseClient";

export async function useGetAddedCitiesData() {
  let { data, error } = await supabase.from("addedCities").select("*");

  if (error) {
    console.log(error);
    throw new Error(`Cities could not be loaded`);
  }

  return data;
}

export async function addCitiesData(city) {
  const { data, error } = await supabase
    .from("addedCities")
    .insert([city])
    .select();

  if (error) {
    console.log(error);

    throw new Error(`City could no be added`);
  }

  return data;
}
