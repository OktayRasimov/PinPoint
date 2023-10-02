import { supabase } from "./supabaseClient";

export async function deleteCity(id) {
  const { data, error } = await supabase
    .from("addedCities")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(`City could not be deleted`);
  }
  return data;
}
