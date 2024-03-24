const style = {
    display: 'flex',
    overflow: 'auto',
    alignItems: 'center',
    height: '70%',
    padding: '20px',
    gap: '20px',

    width: 'calc(100% - 40px)',

    border: '2px solid black',
    borderRadius: '20px',
}

const PlacaMae = ({nome, preco}) => {
    return (
        <div style={style}>
            <h3>Placa Mãe "{nome}"</h3>
            <h3>Preço: {preco}</h3>
        </div>
    );
}

const Memoria = ({nome, preco}) => {
    return (
        <div style={style}>
            <h3>Memória "{nome}"</h3>
            <h3>Preço: {preco}</h3>
        </div>
    );
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <div style={style}>
            <h3>Placa de Vídeo "{nome}"</h3>
            <h3>Preço: {preco}</h3>
        </div>
    );
}

export { PlacaMae, Memoria, PlacaDeVideo };