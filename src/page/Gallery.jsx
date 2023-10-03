import React from 'react'
import { GaleryList } from '../galery/galeryList/GaleryList'
import paintings from '../data/paintings.json'


export const Gallery = () => {
  return (
    <section>
      <GaleryList paintings={paintings}/>
    </section>
  )
}


