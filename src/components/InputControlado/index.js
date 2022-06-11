import { useState } from "react"

const InputControlado = () => {
    const [nome, setNome] = useState("Nome Inicial")

    const pressionou = (e) => {
        setNome(e.target.value)
        console.log(e.target.value)
    }
  return (
    <>
        <label>
            Nome: 
            <input type="text" value={nome} onChange={pressionou} />
        </label>
    </>
  )
}

export default InputControlado