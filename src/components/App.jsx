import React from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from './API/API';
import {ImageGallery} from './ImageGallery/ImageGallery'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

const KEY = '29532345-deb84d68428e9d4fffb51e10d'
const URL =`https://pixabay.com/api/?key=${KEY}&q=yellow+flowers&image+type=photo`

export class App extends React.Component {

  state = {
images: [],
    isLoading: false,
    error: null,

  };

handleGetRequest = async (e) => {
  e.preventDefault()
  const inputValue = e.target.elements.searchValue.value
  const URL =`https://pixabay.com/api/?key=${KEY}&q=${inputValue}&image+type=photo`

  const request = await fetch(URL)
  const response = await request.json()

this.setState({images: response.hits })
console.log(this.state.images)
}


//  componentDidMount() {
//     this.handleGetRequest()
//     // this.setState({ isLoading: true });

//     // try {
//     //   const images = fetchImages.fetchImages("react");
//     //   this.setState({ images });
//     // } catch (error) {
//     //   this.setState({ error });
//     // } finally {
//     //   this.setState({ isLoading: false });
//     // }
//   }




  render() {
  return (
    <div
    className='App'
    style={{
      height: '100%',
      color: '#010101',
      padding: '50px 10px',
      justifyContent: 'space-around'


      
    }}
    >
 <Searchbar handleGetRequest={this.handleGetRequest}/>

 <ImageGallery>
  
    <ImageGalleryItem images={this.state.images}/>
    
    </ImageGallery>

    </div> 
  );
};
}


// { this.state.images.length > 0 && this.state.images.map((image) => {
//   return <p key={image.id}> {image.tags} </p>
// } )}