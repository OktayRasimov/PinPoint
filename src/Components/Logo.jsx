import styled from "styled-components";
import logo from "../Images/pinpointlogoBG.png";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  height: 80px;
  width: auto;
  color: var(--color-green-100);
  border-radius: 50%;
`;

function Logo() {
  return (
    <Link path="/">
      <LogoImg src={logo} />
    </Link>
  );
}

export default Logo;
