import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "./hooks/useUser";

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
      </ul>
      <div className="nav-right">
        {user ? (
          <button
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
