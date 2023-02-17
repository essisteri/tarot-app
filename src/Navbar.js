import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="nav-item">
        <Link to="/onecard">Nosta kortti</Link>
      </div>
      <div className="nav-item">
        <Link to="/meanings">Korttien merkitykset</Link>
      </div>
    </div>
  );
};
export default Navbar;
