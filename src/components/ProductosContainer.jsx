import { useEffect, useState } from "react";
import Productos from "./Productos";
import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

function ProductosContainer() {
  const [productos, setProductos] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const { brand } = useParams(); 

  useEffect(() => {
    let url = 'https://dummyjson.com/products/category/smartphones';
    if (brand) {
      url += `&brand=${brand}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProductos(data.products);
      })
      .catch(error => console.error('Error al obtener los productos:', error));
  }, [brand]);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const filteredProductos = selectedBrand
    ? productos.filter(producto => producto.brand === selectedBrand)
    : productos;

  return (
    <div>
      <div className="justify-content-center navbar navbar-expand-lg navbar-light "> 
        <button className="nav-item bg-light" onClick={() => handleBrandClick('Apple')}>Apple</button>
        <button className="nav-item bg-light" onClick={() => handleBrandClick('Samsung')}>Samsung</button>
        <button className="nav-item bg-light"onClick={() => handleBrandClick('Realme')}>Realme</button>
        <button className="nav-item bg-light" onClick={() => handleBrandClick('Oppo')}>Oppo</button>
        <button className="nav-item bg-light" onClick={() => handleBrandClick('Vivo')}>Vivo</button>
        <button className="nav-item bg-light" onClick={() => handleBrandClick('')}>Mostrar Todos</button>
      </div>
      <ItemListContainer />
      <Productos productos={filteredProductos} />
    </div>
  );
}

export default ProductosContainer;
