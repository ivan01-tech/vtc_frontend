import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";
function Naviagtion() {
  return (
    <header className="header_wrapper">
      <div className="logo">
        <h2>Mboa</h2>
      </div>
      <nav className="naviagtion">
        <ul className=" ">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to={"/"}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={"/our_plans"}>Nos plan</NavLink>
          </li>
          <li>
            <NavLink to={"/good_plan"}>Bon plan</NavLink>
          </li>
          <li>
            <NavLink to={"/camtel_home"}>Camtel Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contacter Camtel</NavLink>
          </li>
        </ul>
        <div className="regiister_section">
          <NavLink className={"special_link"} to={"/sign-up"} >Sign Up</NavLink>
          <NavLink to={"/log-in"} className={"btn_with_blue_bg special_link"}>Log in</NavLink>

          <button>
            <GiHamburgerMenu></GiHamburgerMenu>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Naviagtion;
