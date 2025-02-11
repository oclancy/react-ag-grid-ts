import React from "react";
import "./App.css";
import Nav from "./Nav";
//import GuestGreeting from "./GuestGreeting";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import WelcomePage from "./pages/Home";
import Secured from "./pages/SecuredPage";
import keycloakoptions from "./services/auth";
import { AuthProvider } from "react-oidc-context";

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
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <Secured />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
