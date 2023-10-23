import Logo from "./Logo";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import PageNavUlComponent from "./PageNavUl";
import { useState } from "react";
import MobilePageNavShow from "./MobilePageNavShow";

const PageNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageNavMobileButton = styled.div`
  font-size: 4rem;
  color: white;
  transform: translateY(5px);
  cursor: pointer;
  z-index: 9999;
  @media (width>800px) {
    display: none;
  }
`;

function PageNav() {
  const [showPageNav, setShowPageNav] = useState(false);

  return (
    <PageNavContainer>
      <Logo />

      <PageNavUlComponent showPageNav={showPageNav} />

      <PageNavMobileButton>
        <HiMenu onClick={() => setShowPageNav((prev) => !prev)} />
      </PageNavMobileButton>
      <MobilePageNavShow display={showPageNav} />
    </PageNavContainer>
  );
}

export default PageNav;
