import { Route, Routes } from "react-router-dom";
import ProductosContainer from "./ProductosContainer";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Inicio from "./Inicio";
import Contacto from "./Contacto"; 
import Carrito from "./Carrito";


function Main() {
  return (
    <main className="p-4 bg-[rgba(255,255,255,0.3)] grow">
      <Routes>
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/categoria/contacto" element={<Contacto/>}/>
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