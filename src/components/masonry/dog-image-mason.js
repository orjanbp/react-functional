import React, { useState, useEffect } from 'react'

import Outline from '../outline'
import MasonTile from './mason-tile'

const DogImageMason = ({ size }) => {
  const [getErrors, setErrors] = useState(false)
  const [getImages, setImage] = useState()

  useEffect(() => {
    let imageUrl = `https://dog.ceo/api/breeds/image/random/${size}`

    async function fetchImage() {
      console.log(imageUrl)
      const res = await fetch(imageUrl)
      res
        .json()
        .then(res => setImage(res))
        .catch(err => setErrors(err))
    }
    fetchImage()
  }, [size])

  return getImages
    ? getImages.message.map(image => (
        <MasonTile height={'auto'}>
          <Outline>
            <img src={image} alt='A dog' style={{ width: '100%' }} />
          </Outline>
        </MasonTile>
      ))
    : getErrors
}

export default DogImageMason
