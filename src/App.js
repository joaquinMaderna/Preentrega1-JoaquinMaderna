import './App.css';
import Navbar from './Component/Navbar/Navbar'
import ItemListContainer from './Component/ItemListContainer/ItenListContainer'

function App() {
  return (
    <body>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido"}/>
    </body>
  );
}
export default App;
