import Container from "react-bootstrap/esm/Container";
import Nav from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container className="flex-grow-1 d-flex flex-column position-relative">
        {children}
      </Container>
    </>
  );
};

export default PageLayout;
