import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CityCountrySelector = styled.nav`
  ul {
    display: flex;
    gap: 2.8rem;
    background-color: var(--color-grey-200);
    border-radius: 5px;
    padding: 0.2rem 1rem;
    li {
      text-decoration: none;
      list-style: none;
    }
  }
`;

const StyledNavLinks = styled(NavLink)`
  &.active {
    color: var(--color-green-100);
    padding: 0.2rem;
    border-radius: 5px;
    width: 100%;
  }
`;

function CitiesCountriesSelector() {
  return (
    <CityCountrySelector>
      <ul>
        <li>
          <StyledNavLinks to="cities">Cities</StyledNavLinks>
        </li>
        <li>
          <StyledNavLinks to="countries">Countries</StyledNavLinks>
        </li>
      </ul>
    </CityCountrySelector>
  );
}

export default CitiesCountriesSelector;
