import styled from "styled-components";
import { useDeleteCity } from "../Data/useDeleteCity";
import { useEffect } from "react";

const StyledCitiesLi = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;

  border-radius: 7px;
  padding: 1rem;
`;

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
    <StyledCitiesLi>
      <header>
        <h3>City</h3>
        <p>{city.city}</p>
      </header>
      <header>
        <h3>Country</h3>
        <p>{city.countryName}</p>
      </header>
      <header>
        <h3>Date</h3>
        <p>{city.date}</p>
      </header>
      <p style={{ cursor: "pointer" }} onClick={() => deleteCity(city.id)}>
        &times;
      </p>
    </StyledCitiesLi>
  );
}

export default CitiesEach;
