import styled from "styled-components";
import { useDeleteCity } from "../Data/useDeleteCity";
import { useEffect } from "react";
import { useMapEvent } from "react-leaflet";
import { addAddedSelectedCityData } from "../Features/cityDataSlice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const StyledCitiesLi = styled.li`
  border: 1px solid black;
  position: relative;
  border-radius: 7px;
  padding: 1rem;

  main {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledDelButton = styled.p`
  position: absolute;
  top: 2%;
  right: 2%;
  cursor: pointer;
`;

const StyledCitySelect = styled(NavLink)`
  display: flex;
  justify-content: space-between;
`;

function CitiesEach({ city }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { deleteCity } = useDeleteCity();

  // async function handleDelete() {
  //   const { data, error } = await supabase
  //     .from("addedCities")
  //     .delete()
  //     .eq("id", city.id);
  //   toast.success(`City succ deleted`);

  // }

  function handleCityAddedInfo(e) {
    e.preventDefault();

    dispatch(addAddedSelectedCityData(city));
    // navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);

    navigate(`/app/city?lat=${city.latitude}&lng=${city.longitude}`);
  }

  return (
    <StyledCitiesLi>
      <StyledCitySelect onClick={handleCityAddedInfo}>
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
      </StyledCitySelect>
      <StyledDelButton onClick={() => deleteCity(city.id)}>
        &times;
      </StyledDelButton>
    </StyledCitiesLi>
  );
}

export default CitiesEach;
