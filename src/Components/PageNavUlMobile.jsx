import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PageNavUlMobile = styled.ul`
  padding: 4rem 0 0 2rem;
  display: flex;
  flex-direction: column;
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

function PageNavUlMobileComponent() {
  return (
    <PageNavUlMobile>
      <li>
        <PageNavStyledLink to="/pricing">Pricing</PageNavStyledLink>
      </li>
      <li>
        <PageNavStyledLink to="/product">Product</PageNavStyledLink>
      </li>
      <li>
        <PageNavStyledLink to="/login">Login</PageNavStyledLink>
      </li>
    </PageNavUlMobile>
  );
}

export default PageNavUlMobileComponent;
