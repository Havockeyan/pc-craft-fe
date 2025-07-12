
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Explore from "./components/pages/Explore";
import BuildPc from "./components/pages/BuildPc";
import Contact from "./components/pages/Contact";
import LoginForm from "./components/pages/LoginForm";
import SignUpForm from "./components/pages/SignUpForm";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen relative text-white overflow-x-hidden">
        {/* Global background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#6b21a8_30%,_#000000_100%)] z-[-2]" />
        <div className="absolute inset-0 animate-gradient-motion z-[-1] opacity-80 mix-blend-overlay" />

        <BrowserRouter>
          <Navbar onLoginClick={() => setShowLogin(true)} />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Start Building" element={<BuildPc />} />
            <Route path="/Contact us" element={<Contact />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>

          {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
        </BrowserRouter>
      </div>
    </AnimatePresence>
