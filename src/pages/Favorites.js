import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Favorites(props) {

const [favorites, setFavorites] = useState([]);
const [didDelete, setDidDelete] = useState(false);



useEffect(() => {
    (async () => {
        try {
            const response = await fetch(`https://national-park-backend.herokuapp.com/api/nationalpark`);
            const data = await response.json();
            setFavorites(data);
        } catch(error) {
            console.error(error)
        }
    })()
}, []);

const handleDelete = async (id) => {
    try {
        const response = await fetch(
            `https://national-park-backend.herokuapp.com/api/nationalpark/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const data = response.json();
        setDidDelete(!didDelete);
    } catch (error) {
        console.log(error);
    } finally {
        window.location.assign('/favorites');
    }
};



  return (
    <div className="favorite-page-container">
        <h1 className="show-page-title">Favorites</h1>
        <div className="show-card">
        {Object.keys(favorites).length
            ? favorites.map(favorite => {
                return(
                    <div key={favorites._id} className="max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8 ">
                    <Link to={`/park/${favorite.parkCode}`}> 
                        <img className="rounded-t-lg w-full" src={favorite.images[0].url} alt="" />
                     </Link>
                    <div className="p-5">
                        <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{favorite.fullName}</h5>
                     </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{favorite.description}</p>
                        <Link to={`/park/${favorite.parkCode}`}> 
                        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         More Info
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        </Link>
                        <a href="#" onClick={() => {handleDelete(favorite._id)}} className="inline-flex ml-4 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         Delete from Favorites
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    </div>
                )
            })
       : '' }
        </div>
    </div>
  )
}

export default Favorites