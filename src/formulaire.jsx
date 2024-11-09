import { useState } from "react"; 
function Formulaire(props) { 
 const[name,setName]=useState(""); 
 const[age,setAge]=useState(""); 
 const[adress,setAdress]=useState(""); 
 const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(name)
 }
 return ( 
 <>

 Nom : <input  type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
 <br />
 <br />
 AGE : <input type="number" value={age} onChange={(event)=>setAge(event.target.value)}/>
 <br />
 <br />
 Adress : <input type="text" value={adress} onChange={(event)=>setAdress(event.target.value)}/>
<div>
<h4>Veuillez envoyer les données via {props.email} </h4>
{name? <h3>Je m'appelle { name } </h3> :null}
 {age? <h3> j'ai {age} ans </h3>:null}
 {adress? <h3> j'habite a {adress}  </h3>:null}

</div>
<button className="btn btn-success"
onClick={(event)=>handleSubmit(event)}>Valider</button>
 </>


 
 ); 
} 
export default Formulaire; 
