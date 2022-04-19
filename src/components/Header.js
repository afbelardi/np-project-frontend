import React, { useState, useEffect} from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';
import ButtonMenu from '../components/ButtonMenu';

function Header({ state, setParks }) {

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://national-park-backend.herokuapp.com/api/nationalpark/apikey/${state.current.value}`)
            const data = response.data
            setParks(data.data)
        } catch(error) {
            console.error(error)
        }
    }
 

  return (
    <div className="header-div">
        <div className="title-and-image">
            <h1 className="national-park-title font-fatface">National Park Finder</h1>
            <img className="map-image" src="/map.png" />
        </div>
      
        <div className="form-div">
            <form className="form" onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifying-glass"/>
                <input 
                className="header-input" 
                placeholder="CA, WY, FL"
                name="text"
                ref={state}
                />
            </form>
        </div>
        <ButtonMenu />
    </div>
  )
}

export default Header