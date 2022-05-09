import { Container, ErrorTooltip } from "./styles";

interface FormProps {
  error: boolean;
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form = ({ error, children, onSubmit }: FormProps) => {
  return (
    <>
      <Container onSubmit={onSubmit}>{children}</Container>
      {error && <ErrorTooltip>Email e/ou senha incorretos.</ErrorTooltip>}
    </>
  );
};

export default Form;
