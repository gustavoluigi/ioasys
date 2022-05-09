import styled from "styled-components";

const ContainerStyled = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
