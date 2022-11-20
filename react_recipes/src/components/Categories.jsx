import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/categories')
        .then(res => res.json())
        .then(data => {setCategories(data); console.log(data);})
        
    }, []);

    return (
        <>
            <ul className="categories">{
                
                    categories.map(cat => (
                        
                        <Link key={cat.id} to={`/recipes/${cat.name}`}><li>{cat.name}</li></Link>
                        
                    ))
                
            }</ul>
        </>
    )
}

export default Categories

