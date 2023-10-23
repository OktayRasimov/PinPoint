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

const LogoContainer = styled.div`
  display: flex;
  gap: 1.4rem;
  padding-right: 1.4rem;

  h2 {
    font-size: 3rem;
    padding-top: 0.6rem;
    color: var(--color-white-100);
  }
`;

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <LogoImg src={logo} />
        <h2>PinPoint</h2>
      </LogoContainer>
    </Link>
  );
}

export default Logo;
