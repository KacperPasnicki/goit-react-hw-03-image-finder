import React from "react"

export const Modal = ({clickedImg, closeImg}) => {

    return(

     
      <div className='Overlay' onClick={() => closeImg()} >

<img className='Modal' src={clickedImg.largeImageURL}
alt={clickedImg.tags}
style={{
    height:'auto',
    width: '100%'
}}
/>

      </div>)
      
}

