import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface IProps {}

const Menu: React.FC<IProps> = (props: IProps): React.ReactElement => {


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">pW-eCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            

            <NavDropdown title="Prodotti" id="basic-nav-dropdown">
              <NavDropdown title="Categorie" id="nested-dropdown" style={{paddingLeft: "5%"}}>
                <NavDropdown.Item href="#nested-action/1">
                  Nested Action 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#nested-action/2">
                  Nested Action 2
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
