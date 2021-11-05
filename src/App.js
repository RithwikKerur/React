import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent.js';
import { DISHES } from './shared/dishes';
import { render } from '@testing-library/react';

class App extends Component{


  render() {
    return (
      <div>

        <Main />
      </div>
    );
  }
}

export default App;
