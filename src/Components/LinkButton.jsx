import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: var(--color-green-100);
  border-radius: 10px;
  margin-top: 3rem;
  color: var(--color-white-100);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23rem;
  height: 60px;
  font-size: 2.6rem;
`;

function LinkButton() {
  return <StyledLink to="app">Start Tracking</StyledLink>;
}

export default LinkButton;
