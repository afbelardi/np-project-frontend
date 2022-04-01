import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
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
                setPark(data.data[0]);
                setImage(data.data[0].images);
                setEntranceFees(data.data[0].entranceFees);
                setActivities(data.data[0].activities);
            } catch(error) {
                console.error(error)
            }
        })()
    }, [])

  return (
    <div className="show-page-container">
        <h1 className="show-page-title">{park.fullName}</h1>
        <div className="show-card">
            <div className="image-container">
                {image.map(image => {
                    return (
                        <img className="show-image" src={image.url} />
                    )
                })}
            </div>
            <div className="description-container">
                <p className="description">{park.description}</p>
            </div>
            <div className="price-container">
                {entranceFees.map(fee => {
                    return(
                        <div className="entrance-fees">
                            <div>
                                <p>${fee.cost}</p>
                                <p>{fee.title}</p>
                            </div>
                            <div>
                                <p>{fee.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Show;