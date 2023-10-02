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
      <p>{city.city}</p>
      <p style={{ cursor: "pointer" }} onClick={() => deleteCity(city.id)}>
        &times;
      </p>
    </li>
  );
}

export default CitiesEach;
