import Neto from "./ComponenteNeto"

import { useContext } from "react";
import PkmContexto from "./PokemonContext"

const Filho = () => {
    const {cont} = useContext(PkmContexto)

    return (
        <div>
            <h2>Pokemon Filho: {cont+1}</h2>
            <PkmContexto.Provider value={ cont }>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cont+1}.png`}
                    alt="Pukemon"
                    width={300}
                />
                <Neto />
            </PkmContexto.Provider>
        </div>
    );
}

export default Filho