import React from 'react'
import s from './galeryItem.module.css'

export const GaleryItem = ({paints}) => {


  return (
    <li>
        <img className={s.galeryImg} src={paints.url} alt={paints.author.tag} />
        <h2>{paints.title}</h2>
        <p>Price: {paints.price }</p>
        <p>Quantity: {paints.quantity}</p>
        <button className={s.galeryButton} onClick={(e) => console.log('buy something')}>Buy something</button>
        <hr />
    </li>
  )
}
