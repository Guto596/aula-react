import { useState } from "react";


function App() {
  const [texto, setTexto] = useState("Valor inicial");

  return (
    <div>
      <h1>{texto}</h1>
    </div>
  );
}


export default App;