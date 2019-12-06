import React from 'react';
import './App.css';
import AddPlayerForm from './components/AddPlayerForm';
import PlayerCard from './components/PlayerCard';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Sprint Challenge Home</h1>
        <AddPlayerForm />
        <PlayerCard />
      </div>
    </div>
  );
}

export default App;
