import React from 'react'
import s from './recipeItem.module.css'

export const RecipesItem = ({
    name,time,servings,calories, difficulty, image = "https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg",
}) => {
  return (
    <li className={s.recipes}>
        <img src={image} alt="" />
        <p>Name: {name}</p>
        <p>Time: {time}</p>
        <p>Servings: {servings}</p>
        <p>Calories: {calories}</p>
        <p className={s.item}>Difficulty: {difficulty}</p>
      
        <hr/>
    </li>
  )
}
