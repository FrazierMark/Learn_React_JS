import React, { useState, useEffect } from "react";
import axios from '../axios'

const Row = ({ title }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
            
        async function fetchData() {
            const request = await axios.get(fetchURL);

        }

    }, []);


    return (
        <div>
            <h2>{title}</h2>


        </div>
    )
}

export default Row