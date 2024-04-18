// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tol: 0, heads: 0, tails: 0, toss: 'heads'}

  clickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tol: prevState.tol + 1,
        toss: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tol: prevState.tol + 1,
        toss: 'tails',
      }))
    }
  }

  render() {
    let image
    const {tol, heads, tails, toss} = this.state

    if (toss === 'heads') {
      image = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      image = 'https://assets.ccbp.in/frontend/react-js/tails-img.png' 
    }

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button className="button" onClick={this.clickButton}>
            Toss Coin
          </button>
          <div className="total-container">
            <p className="total">Total: &nbsp; {tol}</p>
            <p className="total">Heads:&nbsp;{heads}</p>
            <p className="total">Tails:&nbsp;{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
