import { useContext } from "react";
import PkmContexto from "./PokemonContext"

const Decrementar = () => {
    const {setCont} = useContext(PkmContexto)

    return (
        <div>
            <button
                onClick={
                    () => {
                        setCont(valor => valor - 1)
                    }
                }
            >Anterior</button>
        </div>
    );
}

export default Decrementar