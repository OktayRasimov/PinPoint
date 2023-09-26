import styled from "styled-components";
import logo from "../Images/pinpointlogo.png";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  height: 60px;
  width: auto;

  background-color: var(--color-green-100);
  padding: 0.8rem;
  border-radius: 50%;
`;

function Logo() {
  return (
    <Link to="/">
      <LogoImg src={logo} />
    </Link>
  );
}

export default Logo;
