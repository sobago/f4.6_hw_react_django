import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import './RecipesCat.css'

const RecipesCat = () => {
    // get Category from URL
    const {category} = useParams();

    const [recipes, setRecipes] = useState([]);

    // get all recipes for category
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/recipes/${category}`)
        .then(res => res.json())
        .then(data => setRecipes(data))
    })

    return (
        <>
            <ul className="recipes">
                {
                    recipes.map(recipe => 
                        <li key={recipe.id}>
                            <h3 className="rec_name"><Link to={`${recipe.id}`}>{recipe.name}</Link></h3>
                        </li>
                    )
                }
            </ul>
        </>
    )

}


export default RecipesCat