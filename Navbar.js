import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/onecard">Nosta kortti</Link>
      <Link to="/meanings">Korttien merkitykset</Link>
    </div>
  );
};
export default Navbar;
