import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/hero.jsx";
import Navbar from "./components/Navbar.jsx";
import BuildPc from "./components/pages/BuildPc.jsx";
import Contact from "./components/pages/Contact.jsx";
import Explore from "./components/pages/Explore.jsx";
import LoginForm from "./components/pages/LoginForm.jsx";
import SignUpForm from "./components/pages/SignUpForm.jsx";
import AdminPage from "./components/pages/Admin/AdminPage.jsx";

function App() {
  const [showLogin, setshowLogin] = useState(false);
  const [showSignUp, setshowSignUp] = useState(false);

  // ✅ FIXED: Define these before usage
  const openLogin = () => {
    setshowLogin(true);
    setshowSignUp(false);
  };

  const openSignUp = () => {
    setshowSignUp(true);
    setshowLogin(false);
  };

  return (
    <div className="min-h-screen relative text-white overflow-x-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#6b21a8_30%,_#000000_100%)] z-[-2]" />
      <div className="absolute inset-0 animate-gradient-motion z-[-1] opacity-80 mix-blend-overlay" />

      <BrowserRouter>
        {/* ✅ FIXED: Pass login/signup handlers */}
        <Navbar onLoginClick={openLogin} onSignUpClick={openSignUp} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Contact us" element={<Contact />} />
          <Route path="/Start Building" element={<BuildPc />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>

      {/* Conditional form modals */}
      {showLogin && (
        <LoginForm
          onClose={() => setshowLogin(false)}
          onSignUpClick={openSignUp}
        />
      )}
      {showSignUp && (
        <SignUpForm
          onClose={() => setshowSignUp(false)}
          onLoginClick={openLogin}
        />
      )}
    </div>
  );
}

export default App;
