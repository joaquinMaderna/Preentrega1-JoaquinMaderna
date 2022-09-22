import './App.css';
import Navbar from './Component/Navbar/Navbar'
import ItemListContainer from './Component/ItemListContainer/ItenListContainer'

function App() {
  return (
    <body>
      <div>
        <Navbar />
      </div>
      <div class="bienvenida">
      <ItemListContainer greeting={"Nuestros Productos"}/>
      </div>
    </body>
  );
}
export default App;
