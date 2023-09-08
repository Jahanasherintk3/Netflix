import React from "react";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";
import {originals,action, comedyMovies,horrorMovies,romanticMovies} from './urls';
function App() {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals' />
     <RowPost url={action}title='Action' isSmall/>
     <RowPost url={comedyMovies}title='Comedy Movies' isSmall/>
     <RowPost url={horrorMovies}title='Horror Movies' isSmall/>
     <RowPost url={romanticMovies}title='Romantic Movies' isSmall/>


    </div>
  );
}

export default App;
