import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to={"/resources"}>Recursos</Link>
        </li>
        <li>
          <Link to={"/stories"}>Histórias</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
