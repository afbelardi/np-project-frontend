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
                const response = await fetch(`https://national-park-backend.herokuapp.com/api/nationalpark/apikey/park/${id}`);
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
            <div className="around-description">
                <div className="description-container">
                    <p className="description">{park.description}</p>
                </div>
            </div>
            <div className="around-price">
            <div className="price-container">
                {entranceFees.map(fee => {
                    return(
                        <div className="entrance-fees">
                            <div className="divide-y divide-slate-800">
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
            <div className="weather-container">
                <div className="weather">
                    <h1 className="text-center text-white mb-4 text-3xl">Weather Information</h1>
                    <p className="description">{park.weatherInfo}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Show;