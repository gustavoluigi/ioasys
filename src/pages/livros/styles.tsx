import styled from "styled-components";
import bgList from "../../../public/bg-list.jpg";

export const Wrapper = styled.div`
  background-image: url(${bgList.src});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  .col {
    padding: 1rem;
    @media (min-width: 768px) {
      flex: 0 0 25%;
      max-width: 25%;
    }

    @media (max-width: 767.99px) {
      width: 100%;
      padding: 0.5rem 1rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: calc(40px - 1rem);
  padding: 0 1rem;
  p {
    margin: 0 0 0 1rem;
    font-size: 28px;
    font-weight: 300;
  }
  button {
    margin-left: auto;
  }
`;
