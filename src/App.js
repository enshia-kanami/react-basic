import React, { useState, useEffect } from 'react';
import './App.css';
import TextInput from './compornents/TextInput.jsx';
import Counter from './compornents/Counter.jsx';
import ToggleButton from './compornents/ToggleButton.jsx';
import { getByTitle } from '@testing-library/react';
import Recipe from './compornents/Recipe';

function App() {

    const APP_ID = '3daae338'
    const APP_KEY = '116bbdfa155d444083161b48ebb7cbd4'

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState("banana");//キーワードの部分を指定するstate
    const [recipes, setRecipes] = useState([]);//APIから情報を取得してきた情報を入れておくためのstate

    const updateSearch = e => { //更新用
      setSearch(e.target.value);
    }

    //recipeAPIからrecipeを取ってくる為の関数
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q="${query}"&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
    
    useEffect( () => {
      console.log(search)
    },[search]) //変更されるたびに呼ばれる
    useEffect( () => {
        getRecipes();
    }, [query])  //初回レンダリングのときに呼び出す

  return(
    <div>
      {/* <p>名前：<TextInput/></p>
      <p>メール:<TextInput/></p>
      <Counter/>
      <ToggleButton/> */}
      <form onSubmit={getSearch}>
        <input type={'text'} value={search} onChange={updateSearch}/>
        <button type={'submit'}>検索</button>
      </form>
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
