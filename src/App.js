import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: props.number
    }
  }

  incFn = () => {
    this.setState(({number}) => number === 50? 50 : {number: number + 1})
  }

  decFn = () => {
    this.setState(({number}) => {
      if (number === -50) {
        return
      } else {
        return {
          number: number - 1
        }
      }
    })
  }

  rndFn = () => {
    this.setState(({number}) => {
      let randomNum = Math.floor(Math.random() * (50 - -50)) + -50
      return {
        number: randomNum
      }
    })
  }

  resetFn = () => {
    this.setState(({number}) => ({number : this.props.number}))
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <span className='number'>{this.state.number}</span>
          <div className="wrapperBtns">
            <button onClick= {this.incFn}>INC</button>
            <button onClick={this.decFn}>DEC</button>
            <button onClick={this.rndFn}>RND</button>
            <button onClick={this.resetFn}>RESET</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
