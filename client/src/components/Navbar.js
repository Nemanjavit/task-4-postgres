import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import SignUp from "./SignUp";

const Nav = () => {
  const [isDark, setIsDark] = useState(false);

  const onThemeChange = () => setIsDark(!isDark);
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (html.getAttribute("data-bs-theme") == "dark") {
      html.setAttribute("data-bs-theme", "light");
    } else {
      html.setAttribute("data-bs-theme", "dark");
    }
  }, [isDark]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Navbar with text</Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end gap-5">
          <NavLink className="d-block" to="/">
            Home
          </NavLink>
          <NavLink className="d-block" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="d-block" to="/">
            <SignUp />
          </NavLink>
          <button className="bg-transparent border-0" onClick={onThemeChange}>
            {isDark ? <IoSunnyOutline size={20} /> : <FaMoon size={20} />}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
