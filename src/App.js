import "./App.css";
import "antd/dist/antd.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" index element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
