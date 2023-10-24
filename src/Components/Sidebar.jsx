import styled from "styled-components";
import Logo from "./Logo";
import CitiesCountriesSelector from "./CitiesCountriesSelector";
import Footer from "./Footer";

import { Outlet } from "react-router";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { checkShow } from "../Features/appLayoutSlice";
import { useEffect } from "react";

const SidebarContainer = styled.div`
  background-color: inherit;
  min-width: 350px;
  width: 30%;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
`;

const MainSideBarContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.6rem;
  width: 90%;

  padding-top: 2rem;
`;

const StyledSideBarArrow = styled.div`
  top: 10%;
  right: 3%;
  font-size: 4rem;
  position: absolute;
  display: none;
  color: var(--color-green-100);
  @media (width<=700px) {
    display: inline-block;
  }
`;

function Sidebar() {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.appLayout);

  function handleSideBarShow() {
    dispatch(checkShow(!isOpen));
  }

  return (
    <SidebarContainer $isOpen={isOpen}>
      <StyledSideBarArrow onClick={handleSideBarShow}>
        <HiArrowNarrowLeft />
      </StyledSideBarArrow>
      <MainSideBarContent>
        <Logo />
        <CitiesCountriesSelector />
        <Outlet />
      </MainSideBarContent>
      <Footer />
    </SidebarContainer>
  );
}

export default Sidebar;
