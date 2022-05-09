import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(data: { email: string; password: string }) {
    const res = await api.post("/auth/sign-in", {
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("token", JSON.stringify(res.headers.authorization));
    api.defaults.headers.common.Authorization = `Bearer ${res.headers.authorization}`;
    setAuthenticated(true);
    router.push("/livros");
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.common.Authorization = false;
    router.push("/login");
  }

  return {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
  };
}
