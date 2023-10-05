import styled from "styled-components";
import LinkButton from "./LinkButton";

const HomePageContainer = styled.div`
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 5rem;
`;

function HomepageHeader() {
  return (
    <HomePageContainer>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
        excepturi at nam veniam necessitatibus, consectetur incidunt aliquam
        ipsum iusto consequatur assumenda nisi fuga fugiat, amet sapiente
        tenetur eos. Accusamus, corrupti.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        aspernatur, explicabo sed, molestiae similique reiciendis commodi
        consequatur vitae totam laudantium voluptates, consectetur saepe ea
        repellendus nobis. Aut vero fugit rerum.
      </p>
      <LinkButton />
    </HomePageContainer>
  );
}

export default HomepageHeader;
