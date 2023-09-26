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
    color: var(--color-white-100);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 1.4rem;

  h2 {
    font-size: 3rem;
    padding-top: 0.6rem;
    color: var(--color-white-100);
  }
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
