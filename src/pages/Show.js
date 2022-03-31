import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../pages/show.css';
import { useParams } from 'react-router-dom';

const Show = (props) => {

const [park, setPark] = useState({})

	const [image, setImage] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [entranceFees, setEntranceFees] = useState([]);
	const [activities, setActivities] = useState([]);
   
    let { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/nationalpark/apikey/park/${id}`);
                const data = await response.json()
                console.log(data)
            } catch(error) {
                console.error(error)
            }
        })()
    })

  return (
    <div className="show-page-container">
        <title>{id}</title>
    </div>
  )
}

export default Show;