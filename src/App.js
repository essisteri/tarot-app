import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import OneCard from "./routes/OneCard";
import ThreeCards from "./routes/ThreeCards";
import Meanings from "./routes/Meanings";
import Navbar from "./Navbar";

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
