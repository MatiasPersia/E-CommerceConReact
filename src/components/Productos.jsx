import { Link } from "react-router-dom";

function Productos({ productos }) {
  return (
    <section className="imagen">
      {productos.map((producto, indice) => {
        return (
          <article key={indice} className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105 w-15" >
            <Link to={`/item/${producto.id}`}><img src={producto.images[1]} alt={producto.title} className="productosIm object-contain aspect-square" /></Link>
            <h2 className="font-bold truncate">{producto.title}</h2>
            <p className="text-gray-400">${producto.price}</p>
            <button className="btn bg-black text-white rounded-md p-2 btnCaracteristicas">
              <Link to={`/item/${producto.id}`}>Ver </Link>
            </button>
          </article>
        )
      })}
    </section>
  );
}

export default Productos;
