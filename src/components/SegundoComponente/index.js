import React from "react";
import "./styles.css"

const SegundoComponente = () => {

    const handleLogin = () => {
        console.log("login")
    }
    return(
        <form>
            <label>
                E-mail: 
                <input type="text" placeholder="digite seu email" />
            </label>
            <label style={{display: 'block'}}>
                Senha:
                <input type="password" placeholder="digite sua senha" />
            </label>
            <input type="button" value="Entrar" onClick={handleLogin} />
        </form>
    );
}

export default SegundoComponente;