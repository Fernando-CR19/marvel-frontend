import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/Auth";

export const HeaderNav = () => {
  const { auth } = useAuthContext();
  return (
    <nav className="hidden lg:flex list-none">
      <li>
        <Link to="/" className="text-white px-4 py-2">
          Meus favoritos
        </Link>
      </li>
      {auth.user ? (
        <>
          <li>
            <Link to="/signout" className="text-white px-4 py-2">
              Sign out
            </Link>
          </li>
          <li>
            <Link
              to="/my-account"
              className="text-white px-4 py-2 font-semibold"
            >
              {auth.user.name}
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/signin" className="text-white px-4 py-2">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white px-4 py-2">
              Sign Up
            </Link>
          </li>
        </>
      )}
    </nav>
  );
};
