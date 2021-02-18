import { useState, useEffect } from "react";
import logo from "./logo.svg";
import { dishes } from "./shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Components/Menu";

function App() {
  const [dish, setdish] = useState(dishes);
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"> Hello Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dish} />
    </div>
  );
}

export default App;
