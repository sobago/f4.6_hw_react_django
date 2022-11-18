import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import './RecipeDetail.css'

const RecipeDetail = () => {
    // get recipe id from url
    const {id} = useParams();
    
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/recipes/${id}`)
        .then(res => res.json())
        .then(data => setRecipe(data))
    })

    return (
        <>
            <div className="recipe_detail">
                <h3 className="rec_name">{recipe.name}</h3>
                <div className="rec_composition">{recipe.composition}</div>
                <div className="rec_description">{recipe.description}</div><hr />
            </div>
        </>
    )

}


export default RecipeDetail