import ComFilho from "./ComFilho";

const ComPai = () => {

    function envMsg(msg) {
        alert("Q ISSO MEU FILHO CALMA")
    }

    return (
        <div>
            <ComFilho msg="Aerofolio para meu palio" envMsg={envMsg} />
        </div>
    );
}

export default ComPai