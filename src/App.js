import logo from "./logo.svg";
import { lazy } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { About } from "./pages/About";

/* const History = lazy(() => import("./pages/History"));
const About = lazy(() => import("./pages/About")); */

function App() {
  return (
    <>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
