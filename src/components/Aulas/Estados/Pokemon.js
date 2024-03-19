import { useState } from "react";

const Pokemon = () =>{
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [cont, setCont] = useState(1)

    function incrementar() {
        if(cont >= '1025') {
            setCont(cont => 1)
        } else {
            setCont(cont => cont + 1)
        }
    } 

    function volta() {
        if(cont <= '1') {
            setCont(cont => 1025)
        } else {
            setCont(cont => cont - 1)
        }
    }

    return (
        <div>
            <h2>Pokemon: {cont}</h2>
            <img
                src={url+cont+".png"}
                alt="Pokemon"
                width={300}
            />
            <button
                onClick={() => volta()}
            >Anterior</button>
            <button
                onClick={() => incrementar()}
            >Proximo</button>
        </div>
    );
}

export default Pokemon