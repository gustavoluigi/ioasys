import styled from "styled-components";
import bgLogin from "../../../public/bg-login.jpg";

export const Wrapper = styled.div`
  background-image: url(${bgLogin.src});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  height: 100vh;

  .logo-row {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: 767.99px) {
      padding-left: 1rem;
    }
    p {
      margin: 0 0 0 1rem;
      color: #fff;
      font-size: 28px;
      font-weight: 300;
    }
  }
`;
