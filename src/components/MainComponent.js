import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './menuComponent.js';
import Contact from './contactComponent.js';
import About from './aboutComponent.js';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { render } from '@testing-library/react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './dishDetailComponent.js';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  render() {


    const HomePage = () =>{
        return(
            <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
                  promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}  
                  leader = {this.state.leaders.filter((leader) => leader.featured)[0]} 
              />
        );
    }
    
    const DishWithId = ({match}) =>{
        return (
          <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}></DishDetail>
          
        )
    }

    const AboutUs = () =>{
      return(
        <About leaders = {this.state.leaders}></About>
      )
    }

    return (
      <div>
        <Header></Header>
        <Switch>
            <Route path = "/home" component = {HomePage} />
            <Route exact path = "/menu" component = {() => <Menu dishes = {this.state.dishes} /> } />
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

export default Main;
