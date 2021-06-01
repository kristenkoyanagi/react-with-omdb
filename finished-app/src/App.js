import React from 'react';
import './App.css';
import Header  from './components/Header';
import Footer  from './components/Footer';
import MovieInfo  from './components/MovieInfo';

function App() {
  return (
    <div className="App">
      <Header title="Movies"></Header>
      <MovieInfo></MovieInfo>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;
