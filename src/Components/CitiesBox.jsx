import styled from "styled-components";
import { useGetAddedCitiesData } from "../Data/useAddedCitiesData";
import { useQuery } from "@tanstack/react-query";

import { supabase } from "../Data/supabaseClient";
import { useEffect } from "react";
import FullPageSpinner from "./FullPageSpinner";
import CitiesEach from "./CitiesEach";

const CitiesContainer = styled.div`
  width: 100%;
  border: 4px solid black;
`;

function CitiesBox() {
  const {
    isLoading,
    data: cities,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: useGetAddedCitiesData,
  });

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
