import './index.css'
import Pai from "./components/atividade01/01Pai"
import * as PC from "./components/atividade01/02MeuPC"
import { World, Arena, Hero, Enemy } from "./components/atividade01/03Batalha"

function App() {
  return (
    <div id="app">
      <center><h1>Atividade 01</h1></center>
      <h3>Aluno: Elpidio Viana Cabral Neto</h3>
      <h3>Matrícula: 536369</h3>

      <hr />
      <center>
      <h2>Questão 01</h2>
      </center>
      <Pai />
      
      <hr />
      <center>
      <h2>Questão 02</h2>
      <h3>Peças do Meu PC:</h3>
      </center>
      <PC.PlacaMae nome="Gigabyte B550M DS3H" preco="650,50" />
      <PC.Memoria nome="MANCER DANTALION Z, 8GB, DDR4, 3200MHZ" preco="170,90" />
      <PC.PlacaDeVideo nome="GPU NV RTX3060 12GB" preco="2060,00" />

      <hr />
      <center>
      <h2>Questão 03</h2>
      </center>
      <World>
        <Arena name="Laughtale">
          <Hero name="Luffy" img="https://criticalhits.com.br/wp-content/uploads/2022/12/a402f-16694231050443-1920.jpg" />
          <Enemy name="Barba Negra" img="https://criticalhits.com.br/wp-content/uploads/2023/04/one-piece-barba-negra-capa.jpg" />
        </Arena>
        <Arena name="Shibuya">
          <Hero name="Jogo" img="https://topmovies.com.br/wp-content/uploads/2024/02/1707095056_515_Quais-sao-os-viloes-mais-legais-de-JJK.jpg" />
          <Enemy name="Sukuna" img="https://editors.dexerto.fr/wp-content/uploads/sites/2/2023/11/10/sukuna-feche-feu-saison-2-shibuya-jujutsu-kaisen-crunchyroll.jpg" />
        </Arena>
        <Arena name="Plano Material">
          <Hero name="Aventureiros" img="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/04/11/cavena-do-drag_c3_a3o-1hrbff64twoqf.png" />
          <Enemy name="Tiamat" img="https://d1w82usnq70pt2.cloudfront.net/wp-content/uploads/2021/07/Magic_Tiamat.jpg" />
        </Arena>
      </World>
    </div>
  );
}

export default App;
