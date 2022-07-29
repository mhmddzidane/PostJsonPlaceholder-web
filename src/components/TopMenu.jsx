import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

function TopMenu() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bolder text-light">
          POST APP
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopMenu;
