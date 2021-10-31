import { Component } from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './MenuComponent';
import DetailDish from "./DetailDishes";
import { DISHES } from "../shared/dishes"


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }
  handleClick = (dishId) => {
    this.setState({
        selectedDish: dishId
    })
}
  render() {
    return (
      <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            
            <Menu dishes = {this.state.dishes} onClick={(dishId) => this.handleClick(dishId)}/>
            <div className="container">
                <div className="row">
                    <DetailDish dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish) [0]}/>
                </div>

            </div>
      </div>
    )
  };
}

export default Main;
