import styled from "styled-components";
import { GetCities } from "../Data/useFetchAddedCities";
import { CitiesContainer } from "./CitiesBox";
import CountriesEach from "./CountriesEach";

const CountriesContainer = styled.div`
  width: 100%;
  height: max(50vh, 300px);
  border-radius: 10px;
  background-color: var(--color-grey-0);
  padding: 1rem 1.6rem 1.6rem 1.6rem;
  position: relative;

  h2 {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid black;
    margin-bottom: 1.2rem;
    padding-bottom: 0.6rem;
  }
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  align-items: center;
  gap: 1rem;
  overflow: auto;
  height: 85%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledNumVisited = styled.main`
  position: absolute;
  top: 1%;
  right: 2%;
`;

function CountriesBox() {
  const { cities, isLoading } = GetCities();

  const uniqueIds = [];

  const unique = cities?.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.countryCode);

    if (!isDuplicate) {
      uniqueIds.push(element.countryCode);

      return true;
    }

    return false;
  });

  console.log();

  return (
    <CountriesContainer>
      <StyledNumVisited>
        <p>Total:{unique.length}</p>
      </StyledNumVisited>
      <h2>Countries Visited</h2>
      <StyledUl>
        {unique?.map((each) => (
          <CountriesEach code={each.countryCode} key={each.id} />
        ))}
      </StyledUl>
    </CountriesContainer>
  );
}

export default CountriesBox;
