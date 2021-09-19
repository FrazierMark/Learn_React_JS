import React, { useState, useEffect } from "react";
import axios from '../axios';
import requests from '../requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                //Random movie gets pulled for Banner
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request
        }
        fetchData();
    }, []);

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >


            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

            </div>
        </header>
    )
}

export default Banner