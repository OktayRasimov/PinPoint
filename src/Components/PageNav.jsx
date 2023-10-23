import Logo from "./Logo";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import PageNavUlComponent from "./PageNavUl";

const PageNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageNavMobile = styled.div`
  font-size: 4rem;
  color: white;
  cursor: pointer;
  @media (width>750px) {
    display: none;
  }
`;

function PageNav() {
  return (
    <PageNavContainer>
      <Logo />

      <PageNavUlComponent />

      <PageNavMobile>
        <HiMenu />
      </PageNavMobile>
    </PageNavContainer>
  );
}

export default PageNav;
