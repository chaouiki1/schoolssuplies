import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Product from './Components/Product.js';
import Summary from './Components/Summary.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cart:[]
    }
  }

purchase = (item) => {
    console.log("You bought a " + item + "!")
    this.setState(state => {
      state.cart = [...state.cart, item]
      return state
    })  
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="999.00" purchase={this.purchase} />
        <Product type="Mechanical Pencil" price="0.25" purchase={this.purchase}  />
        <Product type="College Ruled Loose Leaf" price="2.75" purchase={this.purchase}  />
        <Summary globalState={this.state} cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
