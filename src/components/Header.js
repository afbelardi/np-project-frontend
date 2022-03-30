import React, { useState, useEffect} from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';

function Header(props) {



  

  return (
    <div className="header-div">
        <h1 className="national-park-title font-fatface">National Park Finder</h1>

        <form className="form">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifying-glass"/>
            <input 
            className="header-input" 
            placeholder="CA, WY, FL"
            name="text"
            />
        </form>
    </div>
  )
}

export default Header