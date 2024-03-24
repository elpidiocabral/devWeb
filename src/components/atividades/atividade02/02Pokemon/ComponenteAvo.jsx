import Filho from "./ComponenteFilho"
import Decrementar from "./Decrementar";
import Incrementar from "./Incrementar";

import { useState } from "react";
import PkmContexto from "./PokemonContext"

const Avo = () => {
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [cont, setCont] = useState(1)

    return (
        <div>
            <h2>Pokemon Avo: {cont}</h2>
            <PkmContexto.Provider value={{cont, setCont}}>
                <img
                    src={url+cont+".png"}
                    alt="Pukemon"
                    width={300}
                />
                <Filho value={ cont } />

                <Incrementar />
                <Decrementar />
            </PkmContexto.Provider>

        </div>
    );
}

export default Avo