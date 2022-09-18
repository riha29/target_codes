// this is from monster relodex react website, what actually filters data by search and then again
// aftr removing all the search letters, it brings back all the datas.

// it can be used at commercial websites or any other website where list belongs and needs to findout
// something by word search

import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor() {
    console.log('constructor')
    super(); 
    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monster: users}
    },
    () => {
      console.log(this.state)
    }
    ))
  }
  render() {
    console.log('render')
    const filteredMonster= this.state.monster.filter((monsters)=> {
      return monsters.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    return (
      <div className= 'App'>
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase() 
          this.setState(() => {
            return { searchField }
          })
        }}/>
        {
          filteredMonster.map((monster) => {
          return <div key={monster.id}>
            <h1>
              {monster.name}
            </h1>
          </div>
          }
         )
        }
    </div>
    )
  }
}
export default App;