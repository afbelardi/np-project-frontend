import React from 'react';
import '../App.css';

function Header(props) {
  return (
    <div className="header-div">
        <h1 className="national-park-title">National Park Finder</h1>
        <form className="form" onSubmit={props.handleSubmit}>
            <input 
            className="header-input" 
            placeholder="CA, WY, FL"
            />
                
        </form>
    </div>
  )
}

export default Header