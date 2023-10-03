import './App.css';
import { Container } from './container/Container';
import { Gallery } from './page/Gallery';
import { RecipesList } from './recipes/RecipeList/RecipesList';
import data from '../src/data/recipies.json'

function App() {
  return (
    <>
    <RecipesList data={data}/>
    <Container >
     <Gallery/>
    </Container>
    </>
    
  );
}

export default App;
