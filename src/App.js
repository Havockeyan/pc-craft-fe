import Hero from "./components/hero.jsx";
import Navbar from "./components/Navbar.jsx";
import BuildPc from "./components/pages/BuildPc.jsx";
import Contact from "./components/pages/Contact.jsx";
import Explore from "./components/pages/Explore.jsx";
import LoginForm from "./components/pages/LoginForm.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import react, {useState} from "react";
function App() {
  const [showLogin, setshowLogin] = useState(false)
  return (
    <div className="min-h-screen relative text-white overflow-x-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#6b21a8_30%,_#000000_100%)] z-[-2]" />
    <div className="absolute inset-0 animate-gradient-motion z-[-1] opacity-80 mix-blend-overlay" />
    
    <BrowserRouter>
    <Navbar onLoginClick={()=>setshowLogin(true)}/>
    
    <Routes>
    

    
    <Route path="/" element={<Hero />} />
    <Route path="/Explore" element={<Explore />} />
    <Route path="/Contact us" element={<Contact />} />
    
    <Route path="/Start Building" element={<BuildPc />} />
    </Routes>
    </BrowserRouter>

    {showLogin && <LoginForm onClose={()=>setshowLogin(false)} />}

    
  </div>
  );
}

export default App;
