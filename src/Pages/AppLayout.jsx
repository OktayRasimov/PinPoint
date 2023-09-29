import styled from "styled-components";
import { MainHomePageContainer } from "./Pricing";
import Sidebar from "../Components/Sidebar";
import Map from "../Features/Map";

const FlexedMainHomePage = styled(MainHomePageContainer)`
  display: flex;
  padding: 0;
`;

function AppLayout() {
  return (
    <FlexedMainHomePage>
      <Sidebar />
      <Map />
    </FlexedMainHomePage>
  );
}

export default AppLayout;
