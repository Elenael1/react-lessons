import React from 'react'
import { GaleryItem } from '../galeryItem/GaleryItem'
// import { PropTypes } from 'prop-types'


export const GaleryList = ({paintings}) => {
  return (
    <ul>
        {paintings.map(({id, ...paints}) => {
        return <GaleryItem key={id} paints={paints}/>
      })}
    </ul>
  )
}

// GaleryList.PropTypes = {
//     props: PropTypes.array.isRequired,
// }
