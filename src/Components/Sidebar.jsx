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
  display: flex;
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
  color: var(--color-green-100);
`;

function Sidebar() {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.appLayout);

  useEffect(
    function () {
      console.log(isOpen);
    },
    [isOpen]
  );

  function handleSideBarShow() {
    dispatch(checkShow(!isOpen));
  }

  return (
    <SidebarContainer>
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
