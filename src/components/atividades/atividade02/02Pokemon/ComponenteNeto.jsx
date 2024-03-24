import { useContext } from "react";
import PkmContexto from "./PokemonContext"

const Neto = () => {
    const cont = useContext(PkmContexto)

    return (
        <div>
            <h2>Pokemon Filho: {cont+2}</h2>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cont+2}.png`}
                alt="Pukemon"
                width={300}
            />
        </div>
    );
}

export default Neto