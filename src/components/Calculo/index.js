import React, { useState, useEffect } from 'react';
import "./styles.css"

const Calculo = () => {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [resultado, setResultado] = useState(0);
  console.log(resultado)


  const calcular = () => {
    return (parseFloat(nro1) + parseFloat(nro2)) * (parseFloat(nro1) + parseFloat(nro2));

  }

  useEffect(() => {
    setResultado(calcular());
  }, [resultado]);

  return (
    <>
      <label> Primeiro número</label>
      <input type="number" value={nro1} onChange={(e) => setNro1(e.target.value)}/>
      <label>Segundo Número</label>
      <input type="number" value={nro2} onChange={(e) => setNro2(e.target.value)}/>
      <button onClick={(e) => setResultado(e.target.value)}>Calcular</button>
      <label> Resultado {resultado}</label>
    </>
  );
}

export default Calculo;