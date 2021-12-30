import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './menuComponent.js';
import Contact from './contactComponent.js';
import About from './aboutComponent.js';

import { render } from '@testing-library/react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './dishDetailComponent.js';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


/// converst the state to props used by react
// state is from Redux store
const mapStateToProps = state => {
    return {
      dishes: state.dishes, 
      comments: state.comments, 
      promotions: state.promotions, 
      leaders: state.leaders
    }
}


class Main extends Component{

  constructor(props) {
    super(props);

  
  }

  

  render() {


    const HomePage = () =>{
        return(
            <Home dish = {this.props.dishes.filter((dish) => dish.featured)[0]}
                  promotion = {this.props.promotions.filter((promo) => promo.featured)[0]}  
                  leader = {this.props.leaders.filter((leader) => leader.featured)[0]} 
              />
        );
    }
    
    const DishWithId = ({match}) =>{
        return (
          <DishDetail dish = {this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}></DishDetail>
          
        )
    }

    const AboutUs = () =>{
      return(
        <About leaders = {this.props.leaders}></About>
      )
    }

    return (
      <div>
        <Header></Header>
        <Switch>
            <Route path = "/home" component = {HomePage} />
            <Route exact path = "/menu" component = {() => <Menu dishes = {this.props.dishes} /> } />
            <Route path = "/menu/:dishId" component = {DishWithId}></Route>
            <Route exact path = "/contactUs" component = {Contact}></Route>
            <Route path = "/aboutus" component = {AboutUs}></Route>
            <Redirect to = "/home" />
        </Switch>

        <Footer></Footer>
      </div>

      
    );
  }
}

// Connecting component to react Routers and Redux Store
export default withRouter(connect(mapStateToProps)(Main));
