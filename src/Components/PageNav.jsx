import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";

const PageNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const PageNavUl = styled.ul`
  display: flex;
  gap: 4rem;
  list-style-type: none;

  li {
    color: #fff;
  }
`;

const LogoContainer = styled.div`
  display: flex;
`;

function PageNav() {
  return (
    <PageNavContainer>
      <LogoContainer>
        <Logo />
        <h2>PinPoint</h2>
      </LogoContainer>

      <PageNavUl>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </PageNavUl>
    </PageNavContainer>
  );
}

export default PageNav;
