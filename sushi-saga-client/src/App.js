import React, { Component } from 'react';
import AddMoneyForm from './containers/AddMoneyForm';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    api: [],
    eaten: [],
    money: 100,
    start: 0,
    end: 4
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({api: data})
    })
  }

  
  getSushi = (start, end) => {
    return this.state.api.slice(parseInt(start, 10), parseInt(end, 10))
   }


  chargeCustomer = (sushi) => {
    this.setState( currentState => {
      let newMoney = currentState.money - sushi.price
      return{ money: newMoney}
    })
  }
  

   getMoreSushi = () => {
     this.setState(currentState => {
       let newStart = currentState.start + 4
       let newEnd = currentState.end + 4
       return {start: newStart,
               end: newEnd}
     })
   }

  // ClickHandlers

  eatHandler = (sushi) => {
    if(this.state.money >= sushi.price)
      {this.chargeCustomer(sushi)
        this.setState({
        eaten: [...this.state.eaten, sushi]
        })
      }
    else{
      console.log("Where my money at?")
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    let addMoney = e.target[0].value
    this.setState(currentState => {
      let moreMoney = currentState.money + parseInt(addMoney, 10)
      return { money: moreMoney }
    })
  }

  render() {
    console.log(this.state.eaten)
    return (
      <div className="app">
        <SushiContainer sushis={this.getSushi(this.state.start, this.state.end)} eatHandler={this.eatHandler} eaten={this.state.eaten} getMoreSushi= {this.getMoreSushi}/>
        <Table money={this.state.money}/>
        <AddMoneyForm submitHandler={this.submitHandler}/>
      </div>
    );
  }
}

export default App;