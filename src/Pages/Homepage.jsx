import styled from "styled-components";
import bg from "../Images/homepageimg.jpg";
import PageNav from "../Components/PageNav";
import HomepageHeader from "../Components/HomepageHeader";

const MainHomePageContainer = styled.main`
  height: calc(100vh - 5rem);

  margin: 2.5rem;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.5),
      rgba(36, 42, 46, 0.5)
    ),
    url(${bg});
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Homepage() {
  return (
    <MainHomePageContainer>
      <PageNav />
      <HomepageHeader />
    </MainHomePageContainer>
  );
}

export default Homepage;
