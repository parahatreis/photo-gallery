import React from 'react'
import Card from './Card'

const Cards = ({photos, handleOpen, popHandle}) => {
   return photos.map((photo) => (
      <Card photo={photo} popHandle={popHandle} handleOpen={handleOpen} key={photo.id} />
   ))
}

export default Cards
