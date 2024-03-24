import Decrementar from "./Decrementar";
import Incrementar from "./Incrementar";

import { useContext } from "react";
import PkmContexto from "./PokemonContext"

const Imagem = () => {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const {cont} = useContext(PkmContexto)

    function Proximo() {
        cont = cont + 1;
    }

    return (
        <div>
            <img
                src={url+cont+".png"}
                alt="Pukemon"
                width={300}
            />
            <Incrementar />
            <Decrementar />
        </div>
    );
}

export default Imagem