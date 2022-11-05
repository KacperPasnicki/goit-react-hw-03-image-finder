import React from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from './API/API';
import {ImageGallery} from './ImageGallery/ImageGallery'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Modal } from './Modal/Modal';

const KEY = '29532345-deb84d68428e9d4fffb51e10d'
const URL =`https://pixabay.com/api/?key=${KEY}&q=yellow+flowers&image+type=photo`

const INITIAL_STATE = {
  images: [],
      isLoading: false,
        error: null,
        isOpen:false,
        modalImg: ''
    };
  
export class App extends React.Component {
  state = { ...INITIAL_STATE };


  openModal = (ID) => {
    const clicked = this.state.images.filter(image =>
      {
        console.log('Image clicked')
        return image.id === ID
      }
      )
      const Img = clicked[0]
      this.setState(state => ({isOpen:true, modalImg: Img}))
  }

handleGetRequest = async (e) => {
  e.preventDefault()
  console.log('get API')
  const inputValue = e.target.elements.searchValue.value
  const URL =`https://pixabay.com/api/?key=${KEY}&q=${inputValue}&image+type=photo&per_page=12`

  const request = await fetch(URL)
  const response = await request.json()

this.setState({images: response.hits })
console.log(this.state.images)
}
closeImg = () => {
  this.setState({isOpen: false})
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
   const {modalImg, isOpen} = this.state
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
      {isOpen ?
   (<Modal 
    
    closeImg ={this.closeImg}
    clickedImg ={modalImg}
    />) : null
  
  }
 <Searchbar handleGetRequest={this.handleGetRequest}/>

 <ImageGallery>
  
    <ImageGalleryItem images={this.state.images}
    onCLick ={this.openModal}
    />
    
    </ImageGallery>
    
         
        
    
    </div> 
  );
};
}


