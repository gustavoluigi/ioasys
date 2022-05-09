import { NextPage } from "next";
import Head from "next/head";
import Input from "../../components/Input";
import { Wrapper } from "./styles";
import Image from "next/image";
import Form from "../../components/Form";
import Container from "../../components/Layout/Container";
import { useContext, useState } from "react";
import useAuth from "../../context/hooks/useAuth";
import { AuthContext } from "../../context/authContext";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useAuth();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin({ email, password }).catch((err) => {
      setError(true);
    });
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Wrapper>
        <Container>
          <div className="logo-row">
            <Image src="/logo.svg" width={104} height={36} alt="ioasys" />
            <p>Books</p>
          </div>
          <Form error={error ? true : false} onSubmit={handleSubmit}>
            <Input
              name="teste"
              label="E-mail"
              placeholder="books@ioasys.com.br"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
                setError(false);
              }}
            />
            <Input
              name="teste"
              label="Senha"
              placeholder="●●●●●●●"
              type="password"
              button
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
                setError(false);
              }}
            />
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
