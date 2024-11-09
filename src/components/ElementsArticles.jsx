import React from 'react';
import { Link } from 'react-router-dom';

function ElementsArticles({ articles, handleDelete }) {
    return (
        <div className="row">
            {
                articles && articles.length > 0 && articles.map((art) => (
                    <div key={art.id} className="col-sm-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={art.imageartpetitf} className="card-img-top" alt={art.designation} />
                            <div className="card-body">
                                <h5 className="card-title">{art.designation}</h5>
                                <p className="card-text">{art.caracteristiques}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Marque: {art.marque}</li>
                                <li className="list-group-item">Prix Achat: {art.prixAchat}</li>
                                <li className="list-group-item">Prix Vente: {art.prixVente}</li>
                            </ul>
                            <div className="card-body">
                                <Link exact to={`/editArticle/${art.id}`} className="btn btn-primary">Modifier</Link> 
                                <button 
                                        className="btn btn-danger" 
                                        onClick={() => handleDelete(art.id)} 
                                        aria-label={`Supprimer ${art.designation}`}
                                    >
                                        Supprimer
                                    </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ElementsArticles;