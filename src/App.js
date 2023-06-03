import React from 'react'
import NavBar from './Components/navBar/NavBar';
import './App.css'
import {Action, Originals,Comedy} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url={Originals} title='Netflix Originals' />
      <RowPost  url={Action} title='Action' isSmall  />
      <RowPost  url={Comedy} title='Comedy' isSmall  />
    </div>
  );
}

export default App;
