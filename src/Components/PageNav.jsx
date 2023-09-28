import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";

const PageNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageNavUl = styled.ul`
  display: flex;
  gap: 3.6rem;
  list-style-type: none;

  li {
    color: var(--color-white-100);
  }
`;

const PageNavStyledLink = styled(NavLink)`
  font-size: 2.4rem;
  padding: 1rem 2rem;
  &.active {
    /* padding: 1rem 2rem; */

    border-radius: 10px;
    background-color: var(--color-green-100);
  }
`;

function PageNav() {
  return (
    <PageNavContainer>
      <Logo />

      <PageNavUl>
        <li>
          <PageNavStyledLink to="/pricing">Pricing</PageNavStyledLink>
        </li>
        <li>
          <PageNavStyledLink to="/product">Product</PageNavStyledLink>
        </li>
        <li>
          <PageNavStyledLink to="/login">Login</PageNavStyledLink>
        </li>
      </PageNavUl>
    </PageNavContainer>
  );
}

export default PageNav;
