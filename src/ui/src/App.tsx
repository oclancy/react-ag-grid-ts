import React from "react";
import "./App.css";
import Nav from "./Nav";
//import GuestGreeting from "./GuestGreeting";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Layout from "./pages/Layout";
import Secured from "./pages/SecuredPage";
import keycloakoptions from "./services/auth";
import { AuthProvider } from "react-oidc-context";
import Home from "./pages/Home";

export interface AppProps {
  isLoggedIn: boolean;
}

function App() {
  return (
    <React.StrictMode>
      <AuthProvider {...keycloakoptions}>
        <Nav></Nav>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/secured"
                element={
                  <PrivateRoute>
                    <Secured />
                  </PrivateRoute>
                }
              />
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
