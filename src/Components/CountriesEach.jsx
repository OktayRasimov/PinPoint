import ReactCountryFlag from "react-country-flag";
import styled from "styled-components";

const StyledFlagLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CountriesEach({ code }) {
  return (
    <StyledFlagLi>
      <ReactCountryFlag
        countryCode={code}
        svg
        style={{
          width: "90%",
          height: "auto",
        }}
        title={code}
      />
    </StyledFlagLi>
  );
}

export default CountriesEach;
