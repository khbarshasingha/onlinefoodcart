import logo from "./logo.svg";

import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Components/Menu";
function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"> Hello Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
