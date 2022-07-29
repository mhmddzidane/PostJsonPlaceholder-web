import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

function TopMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Post App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopMenu;
