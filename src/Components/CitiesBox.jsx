import styled from "styled-components";
import CitiesEach from "./CitiesEach";
import FullPageSpinner from "./FullPageSpinner";

import { supabase } from "../Data/supabaseClient";
import { useEffect } from "react";
import { GetCities } from "../Data/useFetchAddedCities";
import { AddCity } from "../Data/useSubmitCityData";

export const CitiesContainer = styled.div`
  width: 100%;
  height: max(50vh, 300px);
  border-radius: 10px;
  background-color: var(--color-grey-0);
  padding: 1rem 1.6rem 1.6rem 1.6rem;
  /* overflow: auto; */
  /* &::-webkit-scrollbar {
    display: none;
  } */
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 85%;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  h2 {
    text-align: center;
    border-bottom: 1px solid black;
    border-bottom: 100%;
    padding-bottom: 0.6rem;
    margin-bottom: 1.6rem;
  }
  h1 {
    padding-top: 3rem;
    text-align: center;
  }
`;

function CitiesBox() {
  const { cities, isLoading } = GetCities();

  useEffect(
    function () {
      console.log(cities);
    },
    [cities]
  );

  return (
    <CitiesContainer>
      <h2>Cities Added</h2>
      {!cities?.length ? (
        <h1>No Cities added,Click to start adding 🔎</h1>
      ) : (
        <ul>
          {cities?.map((each) => (
            <CitiesEach city={each} key={each.id} />
          ))}
        </ul>
      )}
    </CitiesContainer>
  );
}

export default CitiesBox;
