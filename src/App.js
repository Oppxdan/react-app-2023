import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      workers : [
        {
          name: "Evan Til",
          id: '25iefa'
        },
        {
          name: "Sandra Wilkins",
          id: '2325ie'
        },
        {
          name: "Alex Hamilton",
          id: '3452dfgs'
        }
      ]
    }
  }

  render() {

    return (
    <div className="App">
      {
        this.state.workers.map((worker) => {
          return <h2 key={worker.id}>{worker.name}</h2>
        })
      }
    </div>
  );

  }
}

export default App;
