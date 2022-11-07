
import React from "react";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({images, onCLick}) =>  {
   
    
     
      return (
        
             images.map(image => (
                    <li className="ImageGalleryItem" key={image.id} onClick={()=>onCLick(image.id)}> 
  <img src= {image.largeImageURL} alt={image.tags}  className='ImageGalleryItem-image'
  
  />
 
      </li>
              
            
             ))
        
      )

          }

          ImageGalleryItem.propTypes = {
              images: PropTypes.object.isRequired,
              onCLick: PropTypes.func.isRequired
                }
          