import styled, { keyframes } from "styled-components";

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.32);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  border-radius: 4px;
  width: 100%;
  max-width: 370px;
  padding: 0.5rem 1rem;
  position: relative;
  animation: ${fadeRight} 0.5s cubic-bezier(0.42, 0, 0.58, 1) forwards;

  & + & {
    margin-top: 1rem;
  }

  label {
    color: #fff;
    opacity: 0.5;
    font-size: 12px;
  }
`;
const InputStyled = styled.input`
  background-color: transparent;
  color: #fff;
  border: 0;
  outline: 0;
  font-size: 1rem;

  &[type="password"]::placeholder {
    font-size: 8px;
    line-height: 1rem;
  }

  &::placeholder {
    color: #fff;
  }
`;

const ButtonStyled = styled.button`
  color: #b22e6f;
  background-color: #fff;
  border: 0;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  height: calc(100% - 1rem);
  border-radius: 50px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #b22e6f;
    color: #fff;
  }
`;

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  button?: boolean;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  name,
  label,
  placeholder,
  button,
  type,
  onChange,
}: InputProps) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputStyled
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {button && <ButtonStyled>Enviar</ButtonStyled>}
    </Container>
  );
};

export default Input;
