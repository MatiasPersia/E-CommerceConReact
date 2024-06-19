import { Route, Routes } from "react-router-dom";
import ProductosContainer from "./ProductosContainer";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

function Main() {
  return (
    <main className="p-4 bg-[rgba(255,255,255,0.3)] grow">
      <Routes>
        <Route path="/inicio" element={<p>Inicio</p>} />
        <Route path="/categoria/carrito" element={<p>Carrito</p>}/>
        <Route path="/categoria/contacto" element={<p>Contacto</p>}/>
        <Route path="/categoria/productos" element={<ProductosContainer />} />
        <Route path="/categoria/:id" element={<ProductosContainer />} />
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </main>
  )
}

export default Main;