const ComFilho = ({msg, envMsg}) => {
    return (
        <div>
            <h2>Filho: Parabéns pai</h2>
            <button 
                onClick={() => { alert(msg) }}
            >
                <h3>Mandar resposta</h3>
            </button>
        </div>
    );
}

export default ComFilho