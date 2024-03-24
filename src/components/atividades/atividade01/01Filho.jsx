const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '10px',

    border: '2px solid black',
    borderRadius: '20px',

    width: '70%',
    backgroundColor: '#0f0f0f',
}

const Filho = ({altura, peso}) => {
    function calcImc({altura}, {peso}) {
        var imc = peso / (altura*altura)
        
        if(imc < 18) {
            return <h3>Abaixo do Peso</h3>
        }
        else if(imc > 25) {
            return <h3>Acima do Peso</h3>
        }
        else {
            return <h3>Peso Ideal</h3>
        }
    }

    return (
        <div style={style}>
            <h3>Calculo IMC</h3>
            <h3>Altura: {altura}</h3>
            <h3>Peso: {peso}</h3>
            {calcImc({altura}, {peso})}
        </div>
    );
}

export default Filho;