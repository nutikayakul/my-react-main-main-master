import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlacesList = () => {
    const [places, setPlaces] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/places')
            .then(response => {
                setPlaces(response.data);
            })
            .catch(error => {
                setError(error);
                console.error("There was an error fetching the places!", error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Recommended Places to Visit</h1>
            <ul>
                {places.map((place, index) => (
                    <li key={index}>
                        <h2>{place.name}</h2>
                        <p>{place.location}</p>
                        <p>{place.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlacesList;
