import React from "react";
export const ImageGalleryItem = (props) =>  {
    
      console.log(props)
    
    
     
      return (
        <div className="ImageGallery">
            { props.images.map(({ id, largeImageURL, tags }) =>{
              return (
      <li className="ImageGalleryItem" key={id}> 
  <img src= {largeImageURL} alt={tags} className='ImageGalleryItem-image' />

      </li>
              
              )
            })} 
        </div>


      )
  
    }
        


      
      