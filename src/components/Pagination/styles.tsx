import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;

  @media (max-width: 767.99px) {
    justify-content: center;
    margin-top: 2rem;
    gap: 1rem;
    padding-right: 0;
  }

  p {
    margin: 0 1rem 0 0;
    font-size: 12px;

    @media (max-width: 767.99px) {
      flex: 0 0 100%;
      text-align: center;
      margin-right: 0;
    }

    span {
      font-weight: 500;
    }
  }
`;
export const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 1px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);

    &:nth-child(2) {
      transform: rotate(180deg) scale(1.04);
    }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:nth-child(2) {
    transform: rotate(180deg);
    margin-right: 0.5rem;
  }
`;
