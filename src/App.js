import {Component} from 'react';

import CardList from './components/card-list/card-list.component'

import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      workers : [
        
      ],
      searchField: ''
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

  onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
          return { searchField };
        })
      }

  render() {

    const { workers, searchField } = this.state;

    const { onSearchChange } = this;

    const filteredWorkers = workers.filter((worker) => {
          return worker.name.toLocaleLowerCase().includes(searchField);
        });

    return (
    <div className="App">
      <h1 className="app-title">Meet Our Team</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Workers" className="search-box"/>
      
      <CardList workers={filteredWorkers}/>
    </div>
  );

  }
}

export default App;
