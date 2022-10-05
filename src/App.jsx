import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Aside from "./components/Aside";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = useCallback(() => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  }, [showSidebar]);

  return (
    <section className="font-montserrat relative">
      <Aside showSidebar={showSidebar} openSidebar={openSidebar} />
      <Navbar openSidebar={openSidebar} />
      <Hero />
    </section>
  );
}
