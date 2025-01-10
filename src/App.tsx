import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import Manual from "./pages/Manual";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full bg-gradient-to-r from-blue-950 to-purple-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
