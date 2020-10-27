import React from 'react'

const Card = ({photo, handleOpen, popHandle}) => {


   return (
      <div onClick={() => {
         handleOpen();
         popHandle(photo)
      }}  
      className = "card" 
      >
         <div> 
            <img src={photo.webformatURL}  alt="sad" />
         </div>
         <div className="info">
            <p>{photo.user}</p>
            <div>
               <span>#nature</span>
               <span>#nature</span>
            </div>
         </div>
      </div>
   )
}

export default Card
