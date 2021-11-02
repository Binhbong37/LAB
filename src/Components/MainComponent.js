import { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DetailDish from "./DetailDishes";
import{ Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addComment, fetchDishes } from '../redux/actionCreator';
import { actions } from 'react-redux-form';

// Từ STATE của REDUX đến PROPS của React
const mapStateToProps = (state) => {
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
// DISPATCH 
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => dispatch(actions.reset('feedback'))
})


class Main extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.fetchDishes()
  }
  render() {
    const HomePage = () => 
      <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErrMess={this.props.dishes.errMess}
      promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
      leader={this.props.leaders.filter((lead) => lead.featured)[0]}
      />
    
    const DishWithId = ({match}) => {
      return(
        <DetailDish 
        addComment={this.props.addComment}
        dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId),10)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}/>
      )
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    )
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
