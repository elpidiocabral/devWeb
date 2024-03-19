import { useState } from "react";

const Contador = () =>{
    //let cont = 0;
    const [cont, setCont] = useState(0)

    function incrementar() {
        setCont(cont => cont + 1)
    }

    return (
        <div>
            <button
                onClick={() => incrementar()}
            >
                <h3>Contador: {cont}</h3>
            </button>
        </div>
    );
}

export default Contador