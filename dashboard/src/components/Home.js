import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import api from "../api/axios";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      // Read token from URL
      const params = new URLSearchParams(window.location.search);
      const tokenFromUrl = params.get("token");

      // Save it in dashboard's localStorage
      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);
        window.history.replaceState({}, "", "/");
      }

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
        return;
      }

      try {
        const res = await api.get("/api/auth/profile");
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    initialize();
  }, []);

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;