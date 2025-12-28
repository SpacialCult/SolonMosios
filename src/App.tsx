import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import useAnalytics from "./hooks/useAnalytics"; // <--- import hook
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [page, setPage] = useState("Home");

  useAnalytics(page); // <--- track page changes

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Home setPage={setPage} />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
       <MusicPlayer />
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar currentPage={page} setCurrentPage={setPage} />
          <main className="p-4">{renderPage()}</main>
        </>
      )}
    </div>
  );
}
