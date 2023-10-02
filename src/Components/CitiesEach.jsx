import { useDeleteCity } from "../Data/useDeleteCity";

function CitiesEach({ city }) {
  const { deleteCity } = useDeleteCity();

  // async function handleDelete() {
  //   const { data, error } = await supabase
  //     .from("addedCities")
  //     .delete()
  //     .eq("id", city.id);
  //   toast.success(`City succ deleted`);

  // }

  return (
    <li>
      <p>{city.city} &times;</p>
      <button onClick={() => deleteCity(city.id)}>test</button>
    </li>
  );
}

export default CitiesEach;
