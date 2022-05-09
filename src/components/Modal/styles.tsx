import styled, { keyframes } from "styled-components";
import quotes from "../../../public/quotes.svg";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${fadeIn} 0.7s forwards ease;
  display: block;
  overflow-y: auto;
  padding: 1rem;
  
  @media (max-width: 767.99px) {
    padding: 4rem 1rem 1rem;

  }
`;

export const Container = styled.div`
  background: white;
  border-radius: 4px;
  padding: 48px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  position: relative;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767.99px) {
    padding: 24px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 48px;

    img {
      flex: 0 0 350px;
      max-width: 350px;
      height: auto;

      @media (max-width: 767.99px) {
        flex: 1;
        max-width: 100%;
      }
    }

    .box-text {
      flex: 0 0 calc(100% - 350px - 48px);
      @media (max-width: 767.99px) {
        flex: 1;
        max-width: 100%;
      }
      h2.title {
        font-size: 28px;
        margin-top: 0;
        margin-bottom: 0;
      }
      p {
        margin-bottom: 0;
        margin-top: 0;

        &.author {
          color: #ab2680;
          font-size: 12px;
          margin-top: 0;
        }

        &.resenha {
          color: #999999;
          font-size: 12px;
          line-height: 20px;

          &:before {
            content: "";
            background-image: url(${quotes.src});
            width: 18px;
            height: 15px;
            display: inline-block;
            margin-right: 6px;
            position: relative;
            top: 3px;
          }
        }
      }

      .title-section {
        color: #333333;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        margin-top: 32px;
        margin-bottom: 1rem;
      }

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-weight: 500;
          font-size: 12px;
          &:first-child {
            color: #333333;
            font-weight: 500;
          }

          &:last-child {
            color: #999999;
          }
        }
      }
    }
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  background-color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(51, 51, 51, 0.2);

  &:hover {
    transform: scale(1.2);
  }
`;
