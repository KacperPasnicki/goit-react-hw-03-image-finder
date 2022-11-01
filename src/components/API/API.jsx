import axios from "axios";

axios.defaults.baseURL = 
'https://pixabay.com/api/?key=29532345-deb84d68428e9d4fffb51e10d'
const KEY = '29532345-deb84d68428e9d4fffb51e10d'

export const fetchImages = async searchQuery => {
    const response = axios.get(`/search?query=${searchQuery}`);
    console.log(response)
    return response.data.hits;
   
  };