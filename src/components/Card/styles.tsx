import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  display: flex;
  width: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  height: 100%;

  &:hover {
    transform: scale(1.04);
  }

  .box-img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 81px;

    img {
      max-width: 100%;
      height: auto;
      width: 80px;
    }
  }

  .box-text {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    p,
    h2 {
      margin: 0;
    }

    .title {
      font-size: 14px;
      font-weight: 500;
      color: #333333;
    }

    .author {
      font-size: 12px;
      color: #ab2680;
    }

    .pages {
      margin-top: auto;
    }

    .pages,
    .publisher,
    .published {
      font-size: 12px;
      color: #999999;
    }
  }
`;
