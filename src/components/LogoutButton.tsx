import Image from "next/image";
import styled from "styled-components";
import useAuth from "../context/hooks/useAuth";

const Button = styled.button`
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
  }
`;
const LogoutButton = () => {
  const { handleLogout: Logout } = useAuth();
  const handleLogout = async () => {
    Logout();
  };
  return (
    <Button onClick={handleLogout}>
      <Image src="/logout.svg" width={16} height={16} alt="Logout" />
    </Button>
  );
};

export default LogoutButton;
