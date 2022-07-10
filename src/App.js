import React, { useState, useEffect } from 'react';
import './App.css';
import TextInput from './compornents/TextInput.jsx';
import Counter from './compornents/Counter.jsx';
import ToggleButton from './compornents/ToggleButton.jsx';
import Search from './compornents/Search.jsx';
import { getByTitle } from '@testing-library/react';
import Recipe from './compornents/Recipe';

function App() {

    const APP_ID = '3daae338'
    const APP_KEY = '116bbdfa155d444083161b48ebb7cbd4'
    
    const [query, setQuery] = useState("banana");
    const [recipes, setRecipes] = useState([]);

    //recipeAPIからrecipeを取ってくる為の関数
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q="banana"&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    useEffect( () => {
        getRecipes();
    }, [])  //初回レンダリングのときに呼び出す

  return(
    <div>
      {/* <p>名前：<TextInput/></p>
      <p>メール:<TextInput/></p>
      <Counter/>
      <ToggleButton/> */}
      {recipes.map(recipe => ( 
      <Recipe
         key={recipe.recipe.lable}
         title={recipe.recipe.lable}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients}
      />
      ))}
    </div>
  );
};

export default App; //index.jsでAppをインストールしてAppを使える
