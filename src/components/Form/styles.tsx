import styled, { keyframes } from "styled-components";

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -25px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;
export const Container = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 767.99px) {
    align-items: center;
  }
`;

export const ErrorTooltip = styled.div`
  color: #fff;
  background-color: rgba(255, 255, 255, 0.4);
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem;
  position: relative;
  display: inline-flex;
  border-radius: 4px;
  margin-top: 1.5rem;
  animation: ${fadeDown} 0.5s cubic-bezier(0.42, 0, 0.58, 1) forwards;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent rgba(255, 255, 255, 0.4) transparent;
  }
`;
