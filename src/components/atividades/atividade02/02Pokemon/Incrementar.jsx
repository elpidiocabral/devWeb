import { useContext } from "react";
import PkmContexto from "./PokemonContext"

const Incrementar = () => {
    const {setCont} = useContext(PkmContexto)

    return (
        <div>
            <button
                onClick={
                    () => {
                        setCont(valor => valor + 1)
                    }
                }
            >Proximo</button>
        </div>
    );
}

export default Incrementar