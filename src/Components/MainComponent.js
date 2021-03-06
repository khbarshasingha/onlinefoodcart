import React, { Component } from "react";
import { dishes } from "../shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import DishdetailComponent from "./DishdetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: dishes,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)}
        />
        <DishdetailComponent
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

// function MainComponent() {
//   const [dish, setdish] = useState(dishes);
//   const [selectedDish, setSelectedDish] = useState(null);
//   const onDishSelect = dish => {
//     setSelectedDish(dish.name);
//     console.log(selectedDish);
//   };

//   return (
//     <div>
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/"> Hello Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu dishes={dish} onClick={onDishSelect(dish)} />
//       <DishdetailComponent
//         dish={dish.filter(dish => dish.id === selectedDish)[0]}
//       />
//     </div>
//   );
// }

export default Main;
