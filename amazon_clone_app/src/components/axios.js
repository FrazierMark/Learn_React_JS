import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-app-da065.cloudfunctions.net/api' // API (cloud function) URL
});
export default instance;


// http://localhost:5001/clone-app-da065/us-central1/api