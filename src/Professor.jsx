import { useState } from "react";

function Professor(props) {
    const [nome, setNome] = useState("Augusto");
    
    const mudarNome = () => {
        let nomeNovo = "";
        nomeNovo = nome === "Augusto" ? "Alysson" : "Augusto";
        setNome(nomeNovo);
    }

    return (
        <div>
            <h1>{nome}</h1>

            <button onClick={() => {mudarNome()}}>Mudar Nome</button>

            <label>Nome Professor: </label>
            <input value={nome} onChange={ e => setNome(e.target.value) } />
        </div>
    )
}

export default Professor;