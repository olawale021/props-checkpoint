import './App.css';
import PlayerList from './components/playerList';

function App() {
  return (
    <div className="App">
      <h2 style={{fontSize: "40px"}}>My Top 4 Football Players</h2>
      <PlayerList />
    </div>
  );
}

export default App;
