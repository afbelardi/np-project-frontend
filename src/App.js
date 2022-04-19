import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainCard from './components/MainCard';
import axios from 'axios';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";



function App(props) {

  const [parks, setParks] = useState([]);
  const state = useRef(null)

  useEffect(() => {
    (async () => {
      try{
        const response = await axios.get(`https://national-park-backend.herokuapp.com/api/nationalpark/apikey`);
        const data = await response.data
        setParks(data.data)
      } catch(error) {
        console.error(error)
      }
    })()
  }, [state]);


  return (
    <div className="main-container">
      <Header state={state} setParks={setParks}/>
      <div className="main-card">
        <MainCard data={parks} setParks={setParks} />
      </div>
      <ScrollUpButton
          EasingType="easeInExpo"
          ShowAtPosition={181}
          AnimationDuration={605}
        />
    </div>
  );
}

export default App;
