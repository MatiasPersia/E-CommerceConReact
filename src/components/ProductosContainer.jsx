import { useEffect, useState } from "react";
import Productos from "./Productos";
import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";


function ProductosContainer() {
  const [productos, setProductos] = useState([]);
  const params = useParams();

  useEffect(() => {
    const url = params.id
      ? `https://dummyjson.com/products/category/smartphones?limit=5${params.id}`
      : 'https://dummyjson.com/products/category/smartphones?limit=15';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
      });
  }, [params.id]);

  return (
    <div>
      <ItemListContainer/>
      <Productos productos={productos} />
    </div>
  );
}

export default ProductosContainer;
