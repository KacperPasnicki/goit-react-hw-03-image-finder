import { Modal } from "components/Modal/Modal";
import React, { useState } from "react";
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


          