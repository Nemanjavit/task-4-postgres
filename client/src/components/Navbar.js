import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useLayoutEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const Nav = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const onThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useLayoutEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-bs-theme", theme);
  }, [theme, setTheme]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-0 navbar">
      <Container>
        <Navbar.Brand href="/">Navbar with text</Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <NavLink
            className="d-block text-decoration-none px-3 py-3 text-muted navbar_link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="d-block text-decoration-none px-3 py-3 text-muted navbar_link"
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className="d-block text-decoration-none px-3 py-3 text-muted navbar_link"
            to="/signup"
          >
            SignUp
          </NavLink>

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
