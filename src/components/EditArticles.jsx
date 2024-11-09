import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom'; 

function EditArticles() { 
    const navigate = useNavigate(); 
    const { id } = useParams(); 
    const [reference, setReference] = useState(""); 
    const [designation, setDesignation] = useState(""); 
    const [marque, setMarque] = useState(""); 
    const [prixAchat, setPrixAchat] = useState(""); 
    const [prixVente, setPrixVente] = useState(""); 
    const [qtestock, setQtestock] = useState(""); 
    const [imageartpetitf, setImageartpetitf] = useState(""); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(""); 

    useEffect(() => {
        axios.get(`http://localhost:3001/produits/${id}`)
            .then((response) => {
                setReference(response.data.reference);
                setDesignation(response.data.designation);
                setMarque(response.data.marque);
                setPrixAchat(response.data.prixAchat);
                setPrixVente(response.data.prixVente);
                setQtestock(response.data.qtestock);
                setImageartpetitf(response.data.imageartpetitf);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Erreur lors du chargement des données.");
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => { 
        e.preventDefault(); 

        // Basic validation
        if (!reference || !designation || !marque || !prixAchat || !prixVente || !qtestock) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const updatedProduct = { 
            reference, 
            designation, 
            marque, 
            prixAchat, 
            prixVente, 
            qtestock, 
            imageartpetitf 
        }; 

        axios.put(`http://localhost:3001/produits/${id}`, updatedProduct) 
            .then(res => { 
                console.log(res); 
                navigate("/articles"); 
            }) 
            .catch(error => { 
                console.error(error); 
                setError("Erreur ! Mise à jour non effectuée.");
            }); 
    }; 

    if (loading) {
        return <div>Chargement...</div>; // Loading state
    }

    return (
        <div className="container">
            <h2>Modification d'un produit</h2>
            {error && <div className="alert alert-danger">{error}</div>} {/* Error message */}
            <form onSubmit={handleSubmit}>
                <div className="grid gap-3">
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control"
                            placeholder="Référence"
                            type="text"
                            value={reference}
                            onChange={e => setReference(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control"
                            placeholder="Désignation"
                            name="designation"
                            type="text"
                            value={designation}
                            onChange={e => setDesignation(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control"
                            placeholder="Marque"
                            type="text"
                            value={marque}
                            onChange={e => setMarque(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control"
                            placeholder="Prix Achat"
                            type="number"
                            value={prixAchat}
                            onChange={e => setPrixAchat(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control"
                            placeholder="Prix Vente"
                            name="prixVente"
                            type="number"
                            value={prixVente}
                            onChange={e => setPrixVente(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control"
                            placeholder="Quantité"
                            type="number"
                            value={qtestock}
                            onChange={e => setQtestock(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control"
                            placeholder="Image"
                            type="text"
                            value={imageartpetitf}
                            onChange={e => setImageartpetitf(e.target.value)}
                        />
                    </div> 
                    <div>{imageartpetitf && <img src={imageartpetitf} alt="Aperçu" width="70"/>}</div> 
                    <div>
                        <button className="btn btn-success">Valider</button>
                    </div> 
                </div>
            </form>
        </div>
    ); 
} 

export default EditArticles;