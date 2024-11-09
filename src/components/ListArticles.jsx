import axios from 'axios'; 
import { useState, useEffect } from 'react'; 
import  ElementsArticle  from './ElementsArticles';

function ListArticles() { 
    const [articles, setArticles] = useState([]); 

    useEffect(() => { 
        axios.get("http://localhost:3001/produits") 
        .then((response) => setArticles(response.data)); 
    }, []); 

    return (
        <>
            <h2>Liste des articles</h2>
            <ElementsArticle articles={articles}  setArticles={setArticles}/>
        </>
    );
}

export default ListArticles;