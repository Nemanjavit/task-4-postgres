import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useContext, useLayoutEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import { makeRequest, methodTypes } from "../helpers/api";
import { makeToast } from "../helpers/notifications";

const Nav = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { user, setUser } = useContext(AuthContext);
  console.log(process.env.SECRET_COOKIE);

  const onThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLogOut = async () => {
    try {
      const response = await makeRequest({
        method: methodTypes.POST,
        withCredentials: true,
        url: "/auth/logout",
      });

      setUser({ loggedIn: response.loggedIn });
      makeToast({ msg: response.msg, type: "success" });
    } catch (error) {
      makeToast({ msg: error.message, type: "danger" });
      console.error("Error logging out:", error);
    }
  };

  useLayoutEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-bs-theme", theme);
  }, [theme, setTheme]);

  return (
    <Navbar expand="lg" className="bg-body-secondary py-0 navbar">
      <Container>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <NavLink
            className="d-block text-decoration-none px-3 py-3 text-muted navbar_link"
            to="/"
          >
            Home
          </NavLink>

          {user.loggedIn ? (
            <>
              <NavLink
                className="d-block text-decoration-none px-3 py-3 text-muted navbar_link"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <Button
                onClick={handleLogOut}
                variant="link"
                className="d-block border-0 text-decoration-none rounded-0 px-3 py-3 text-muted navbar_link"
              >
                Log Out
              </Button>
            </>
          ) : (
            <NavLink
              className="d-block text-decoration-none px-3 py-3 text-muted navbar_link"
              to="/signup"
            >
              Sign Up
            </NavLink>
          )}

          <button
            className="bg-transparent border-0 px-3"
            onClick={onThemeChange}
          >
            {theme === "dark" ? (
              <IoSunnyOutline size={20} />
            ) : (
              <FaMoon size={20} />
            )}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
