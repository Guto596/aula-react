import { useState } from "react";
import Professor from "./Professor";
import Calculo from "./Calculo"


function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador+1)}>Incrementar</button>
      <button onClick={() => setContador(contador-1)}>Decrementar</button>

      <hr />

      <Professor />
      <hr />
      <Calculo />
    </div>
  );
}


export default App;