import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainCard from './components/MainCard';
import axios from 'axios';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import { Oval } from 'react-loading-icons';




function App(props) {

  const [parks, setParks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const state = useRef(null)

  useEffect(() => {
    (async () => {
      try{
        const response = await axios.get(`https://national-park-backend.herokuapp.com/api/nationalpark/apikey`);
        const data = await response.data
        setParks(data.data);
        setIsLoading(!isLoading);
      } catch(error) {
        console.error(error)
      }
    })()
  }, [state]);


      if(!isLoading) {
        return (
        <div className="bg-gray-800 h-screen flex justify-center items-center">
          < Oval 
          stroke="#06bcee" 
          className="svg-loaders-svg"
          viewBox="0 0 38 38"
          height={400} 
          width={400}
          />
        </div>
        )
      } else {
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
  }

export default App;
