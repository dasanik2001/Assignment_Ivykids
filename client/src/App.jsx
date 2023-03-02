import React, { Component } from "react";

import { Toaster } from "react-hot-toast";
import { Container } from "@mui/material";

import { useRoutes, NavLink } from "react-router-dom";
import { navigations } from "./routes";
import { UserAuthContextProvider } from "./contexts/UserAuthContextProvider";
const App = () => {
  const content = useRoutes(navigations);

  return (
    <>
      <Toaster />

      <UserAuthContextProvider>{content}</UserAuthContextProvider>
    </>
  );
};

export default App;
