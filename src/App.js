import Hero from "./components/hero.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <div className="min-h-screen relative text-white overflow-x-hidden">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#6b21a8_30%,_#000000_100%)] z-[-2]" />

   
    <div className="absolute inset-0 animate-gradient-motion z-[-1] opacity-80 mix-blend-overlay" />

    <Navbar />
    <Hero />
  </div>
  );
}

export default App;
