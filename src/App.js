import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import OneCard from "./OneCard";
import ThreeCards from "./ThreeCards";
import Meanings from "./Meanings";
import Navbar from "../Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<div>Nosta kortteja ja lue tarot-korttien merkityksiä.</div>}
        />
        <Route path="/onecard" element={<OneCard />} />
        <Route path="/threecards" element={<ThreeCards />} />
        <Route path="/meanings" element={<Meanings />} />
        <Route
          path="*"
          element={<h1>Nosta kortteja ja lue tarot-korttien merkityksiä.</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
