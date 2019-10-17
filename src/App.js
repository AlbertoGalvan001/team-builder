import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import Form from './Form';
import TeamList from './TeamList';



function App() {

  const [teamList, setTeamList] = useState(data);
  // console.log(data);

  const addNewTeamMember = member => {
    setTeamList([...teamList, member])
  }


  return (
    <div className="App">
      <h1>My Awsome Team</h1>
      <TeamList teamList={teamList} />
      <Form addNewTeamMember={addNewTeamMember} />


    </div>
  );
}

export default App;
