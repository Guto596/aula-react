import { useState } from "react";

function Calculo() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

    return (
        <div>
            <label>Valor1:</label>
            <input value={valor1} onChange={e => setValor1(e.target.value)} />
            <br />
            <label>Valor2:</label>
            <input value={valor2} onChange={e => setValor2(e.target.value)} />
            <br />

            <button onClick={() => setResultado(Number(valor1) + Number(valor2))}>+</button>
            <button onClick={() => setResultado(Number(valor1) -  Number(valor2))}>-</button>
            <button onClick={() => setResultado(Number(valor1) * Number(valor2))}>*</button>
            <button onClick={() => setResultado(Number(valor1) / Number(valor2))}>/</button>

            <h1>Valor 01: {valor1}</h1>
            <h1>Valor 02: {valor2}</h1>
            <h1>Resultado: {resultado}</h1>

        </div>
    )
}

export default Calculo;