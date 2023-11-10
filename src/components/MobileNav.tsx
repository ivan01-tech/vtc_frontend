import { Link } from "react-router-dom";

import "../styles/banner.css";
import "../styles/navigation.css";


function MobileMenu() {
  return (
    <header>
      <div>
        <h2>Mboa</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/"}>Nos plan</Link>
          </li>
          <li>
            <Link to={"/"}>Bon plan</Link>
          </li>
          <li>
            <Link to={"/"}>Camtel Home</Link>
          </li>
          <li>
            <Link to={"/"}>Contacter Camtel</Link>
          </li>
        </ul>
        <div>
          <Link to={"/sign-up"}>Sign Up</Link>
          <Link to={".log-in"}>Log in</Link>
        </div>
      </nav>
    </header>
  );
}

export default MobileMenu;
