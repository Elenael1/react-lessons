import { uuid } from 'uuidv4'
import { RecipesItem } from '../RecipeItem/RecipesItem'


export const RecipesList = ({data}) => {
  return (
    <ul>{data.map(({name,time,servings,calories, difficulty, image }) => {
        return(
            <RecipesItem key={uuid} name={name} time={time} servings={servings} calories={calories} difficulty={difficulty} image={image}/>
        )
        
    })}
    </ul>
  )
}
