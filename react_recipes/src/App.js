import './App.css';
import React from 'react';
import SwaggerApp from './components/Swagger'
import Home from './components/Home';
import Layout from './components/Layout'
import Categories from './components/Categories';
import RecipesCat from './components/RecipesCat';
import RecipeDetail from './components/RecipeDetail';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='recipes' element={<Categories/>}/>
            <Route path='recipes/:category' element={<RecipesCat/>}/>
            <Route path='recipes/:category/:id' element={<RecipeDetail/>}/>
            <Route path='api' element={<SwaggerApp/>}/>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
