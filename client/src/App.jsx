// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import { useState } from 'react';

function App() {
  let defaultPlayerDAata = [
    {
      id: 1,
      username: "admin",
      email: "admin@gmail.com",
      password: "admin",
      exp: 10
    },
    {
      id: 2,
      username: "admin2",
      email: "admin2@gmail.com",
      password: "admin2",
      exp: 10
    },
    {
      id: 3,
      username: "okky",
      email: "okky@gmail.com",
      password: "okky",
      exp: 10
    }
  ]

  const [Players, setPlayers] = useState(defaultPlayerDAata)
  const [PlayerEdit, setPlayerEdit] = useState("")
  const [Keyword, setKeyword] = useState('')

  const addPlayer = (newPlayer) => {
    newPlayer.id = Math.max(...Players.map(player => player.id)) + 1
    // console.log(newPlayer.id);
    setPlayers(players => [...Players, newPlayer])
  }

  const selectEdit = (playerId) => {
    let player = Players.filter(player => player.id === playerId)
    setPlayerEdit(player[0]);
  }

  const performEdit = (player) => {
    console.log(`going to edit player with username ${player.username}`)
    const indexToEdit = Players.findIndex(item => item.id === player.id)
    console.log(`the player index tobe edit is ${indexToEdit}`);

    let copyPlayers = [...Players]
    copyPlayers[indexToEdit] = player

    setPlayers(copyPlayers)

  }

  const cancelEdit = () => {
    setPlayerEdit('')
  }

  const filteredPlayerData = () => {
    return Players.filter(player => new RegExp(Keyword, 'g').test(player.username) ||
      new RegExp(Keyword, 'g').test(player.email) ||
      new RegExp(Keyword, 'g').test(player.exp))
  }

  return (
    <div>
      <div className="container mt-5">
        <h2>Player Data</h2>
        <div className="row" >
          <div className="col-12">
            <div className="d-flex align-item-center mb-3">
              <input type="text" className="form-control" placeholder="Search Player..."
                onChange={(e) => setKeyword(e.target.value)} value={Keyword} />
            </div>

            <PlayerList players={filteredPlayerData()} selectEdit={selectEdit} />
          </div>

          <div className="col-8 border p-12" >
            <h2>Player Form</h2>
            <PlayerForm handleCreate={addPlayer} playerEdit={PlayerEdit} cancelEdit={cancelEdit} performEdit={performEdit} />

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
