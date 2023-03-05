import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      workers : [
        
      ]
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()).then((users) => this.setState(() => {
        return {workers: users}
      },
      () => {}
      ))
  }

  render() {

    return (
    <div className="App">
      <input  className="search-box" type="search" placeholder="Search Employees" onChange={(event) => {
        const filteredWorkers = this.state.workers.filter((worker) => {
          return worker.name.toLocaleLowerCase().includes(event.target.value);
        });

        this.setState(() => {
          return { workers: filteredWorkers };
        })
      }}/>
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
