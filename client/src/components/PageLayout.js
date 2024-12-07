import Container from "react-bootstrap/esm/Container";
import Nav from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Nav />
      <Container>{children}</Container>
    </div>
  );
};

export default PageLayout;
