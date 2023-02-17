import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import OneCard from "./OneCard";
import ThreeCards from "./ThreeCards";
import Meanings from "./Meanings";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <ul>
            <li className="nav-item">
              <Link to="/">Etusivu</Link>
            </li>
            <li className="nav-item">
              <Link to="/onecard">Nosta kortti</Link>
            </li>

            <li className="nav-item">
              <Link to="/meanings">Korttien merkitykset</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>Nosta kortteja ja lue tarot-korttien merkityksiä.</div>
            }
          />
          <Route path="/onecard/*" element={<OneCard />} />
          <Route path="threecards/*" element={<ThreeCards />} />
          <Route path="meanings/*" element={<Meanings />} />
          <Route path="*" element={<h1>Do not do that!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
