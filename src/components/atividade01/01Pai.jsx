import Filho from "./01Filho"

const style = {
    display: 'flex',
    flexDirection: 'row',
    
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '50%',
    padding: '20px',
    gap: '200px',

    border: '2px solid black',
    borderRadius: '20px',

    backgroundColor: '#000000',
}

const Pai = () => {
    return (
        <div style={style}>
            <Filho altura={1.8} peso={90} />
            <Filho altura={1.8} peso={25} />
        </div>
    );
}

export default Pai;