import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
      })
      .catch(error => console.error("Error al obtener el producto:", error));
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-4">
      <h1>{producto.title}</h1>
      <p className="subtitulo">${producto.price}</p>
      <div className="contenedor-imagenes ">
        {producto.images && producto.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index+1} de ${producto.title}`} className="imgDetalle" />
        ))}
      </div>
      <p className="subtitulo bg-black text-white p-4 rounded-md">{producto.description}</p>
    </div>
  );
}

export default ProductoDetalle;

