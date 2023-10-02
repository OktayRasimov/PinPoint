import styled from "styled-components";

const StyledNotValid = styled.h2`
  text-align: center;
`;

function NotValidCity() {
  return (
    <StyledNotValid>Doesnt seem to be a city,click again⛔</StyledNotValid>
  );
}

export default NotValidCity;
