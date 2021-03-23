import MyNavbar from "./components/Navbar/MyNavbar";
import Container from 'react-bootstrap/Container';

import Articulo from './components/Articulo/Articulo';

const App = () => {
  return (
    <main>
      <MyNavbar />
      <Container className="my-4">
        <Articulo nombre="Producto 1" cantidad="10"></Articulo>
        <Articulo nombre="Producto 1" cantidad="11"></Articulo>
        <Articulo nombre="Producto 1" cantidad="12"></Articulo>
        <Articulo nombre="Producto 1" cantidad="13"></Articulo>
      </Container>
    </main>
  );
}

export default App;
