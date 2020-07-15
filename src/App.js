import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovie'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Movie Search</h1>
        <SearchMovies />
      </div>
    )
  }
}

export default App;
