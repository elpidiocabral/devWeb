// import './index.css'
import FunctionContextA from "./components/atividades/atividade02/01_context/FunctionContextA";
import FunctionContextB from "./components/atividades/atividade02/01_context/FunctionContextB";
import Avo from "./components/atividades/atividade02/02Pokemon/ComponenteAvo";
import Filho from "./components/atividades/atividade02/02Pokemon/ComponenteFilho";
import Neto from "./components/atividades/atividade02/02Pokemon/ComponenteNeto";

function App() {
  return (
    <div>
      <center><h1>Atividade 02</h1></center>
      <h3>Aluno: Elpidio Viana Cabral Neto</h3>
      <h3>Matrícula: 536369</h3>

      <hr />
      <center>
      <h2>Questão 01</h2>
      </center>
      <FunctionContextA />
      
      <hr />
      <center>
      <h2>Questão 02 e Questão 03</h2>
      </center>
      <Avo />

    </div>
  );
}

export default App;
