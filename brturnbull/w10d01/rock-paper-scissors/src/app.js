import React from 'react';
import ReactDOM from 'react-dom';
import Decision from './components/Decision';
import Choices from './components/Choices';

import 'bulma';

const choices = ['Scissors', 'Paper', 'Rock'];

const computerChoice = choices[Math.floor(Math.random() * choices.length)];


class App extends React.Component {

  state = { val: ''}
  decision: '';

  choice = (e) => {
    this.setState({ val: e.target.value }, () => {
      if(this.state.val === computerChoice){
        this.setState({decision: 'We have a tie!'});
      } else if (this.state.val === 'rock' && computerChoice === 'scissors' ||
        this.state.val === 'paper' && computerChoice === 'rock' ||
        this.state.val === 'scissors' && computerChoice === 'paper') {
        this.setState({decision: 'You win!'});
      } else {
        this.setState({decision: 'Oops, you lost!'});
      }
    });
  }

  reset = () => this.setState({ decision: '', val: '' });

  render() {
    return (
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">Paper, Scissors, Rock.</h1>
            <Choices
              choice ={this.choice}
              reset={this.reset}
            />
            <Decision
              decision ={this.state.decision}
            />
          </div>
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
