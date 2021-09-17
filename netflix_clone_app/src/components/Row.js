import React, { useState, useEffect } from "react";
import axios from '../axios'

const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
            
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchURL]);


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img src={movie.poster_path} alt={movie.name} /> 
                ))}
            </div>

        </div>
    )
}

export default Row