import React from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends React.Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance })
  }

  onSubmit = async (event) => {
    event.preventDefault();
    
    const accounts = await web3.eth.getAccounts()

    this.setState({ message: 'Waiting on transaction success...' })

    const response = await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    }).catch (error => {
      return {error}
    })

    if (response.error) {
      this.setState({ message: 'access reject' })
    }

    this.setState({ message: 'You have been enterd' })
  }

  onClick = async () => {
    const accounts = await web3.eth.getAccounts()

    this.setState({ message: 'Waiting on transaction success...' })

    const response = await lottery.methods.pickWinner().send({
      from: accounts[0]
    }).catch (error => {
      return {error}
    })

    if (response.error) {
      this.setState({ message: 'failed picking a winner' })
    }

    this.setState({ message: 'A winner has been picked' })
  }

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}
          current players {this.state.players.length}
          win {web3.utils.fromWei(this.state.balance, 'ether')}
        </p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />
        <button onClick={this.onClick}>Pick a Winner</button>
        <hr />

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
