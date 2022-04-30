import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal';



export default function MainCard(props) {
	

    const handleSubmit = async (park) => {
		try {
			const response = await fetch('https://national-park-backend.herokuapp.com/api/nationalpark/favorites', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					fullName: park.fullName,
					description: park.description,
					images: park.images,
					entranceFees: park.entranceFees,
					weatherInfo: park.weatherInfo,
					directionsInfo: park.directionsInfo,
					activities: park.activities,
					url: park.url
				})
			});
            
			const data = await response.json();
            console.log(data)
		} catch (error) {
			console.error(error);
		} 
	};




    return (
        <div className="">
        {Object.keys(props.data).length
            ? props.data.map(park => {
                return(
            <Bounce>
        <div className="max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8 ">
                    <Link to={`/park/${park.parkCode}`}> 
                        <img className="rounded-t-lg w-full" src={park.images[0].url} alt="" />
                     </Link>
                    <div className="p-5">
                        <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{park.fullName}</h5>
                     </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{park.description}</p>
                        <Link to={`/park/${park.parkCode}`}> 
                        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         More Info
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        </Link>
                        <a href="#" onClick={() => {handleSubmit(park)}}className="inline-flex ml-4 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         Add to Favorites
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    </div>
                    </Bounce>
                )
        })
        : '' }
    </div>
      )
}

