import styled from "styled-components";
import Logo from "./Logo";
import CitiesCountriesSelector from "./CitiesCountriesSelector";
import { Outlet } from "react-router";
import Footer from "./Footer";

const SidebarContainer = styled.div`
  background-color: inherit;
  min-width: 350px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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

function Sidebar() {
  return (
    <SidebarContainer>
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
