import { useState } from "react";

const Contador = ({name}) => {
    const [count, setCount] = useState(0);

    const incrementaCount = () => {
        setCount(count+1);
    }
    
    return(
        <>
            <h1>Olá, {name}!</h1>
            <h1>Contador de cliques: {count}</h1>
            <button onClick={incrementaCount}>CLIQUE AQUI!!!</button>
        </>
    );
}

export default Contador;