import { Link } from 'react-router-dom';    

const Carrito = () => { 
    return ( 
        <div className="container ">
            <h1 className="main-title">Carrito</h1>
            <p>Precio total: $</p>
            <button className="btn btn-primary m-2">Vaciar</button>
            <button className="btn btn-primary ">
            <Link to="#">Finalizar compra</Link></button>
        </div>
    )
}

export default Carrito; 