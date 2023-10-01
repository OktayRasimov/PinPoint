import styled from "styled-components";
import CitiesEach from "./CitiesEach";
import FullPageSpinner from "./FullPageSpinner";

import { supabase } from "../Data/supabaseClient";
import { useEffect } from "react";
import { GetCities } from "../Data/useFetchAddedCities";

const CitiesContainer = styled.div`
  width: 100%;
  border: 4px solid black;
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
      <ul>
        {cities?.map((each) => (
          <CitiesEach city={each} key={each.id} />
        ))}
      </ul>
    </CitiesContainer>
  );
}

export default CitiesBox;
