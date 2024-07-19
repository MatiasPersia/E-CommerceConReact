import CartWidget from "./CartWidget";
import {NavLink } from "react-router-dom";

function Navbar (){
    return(
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        <li class="nav-item  p-2">
          <NavLink to="/inicio">Inicio</NavLink>
        </li>
        <li class="nav-item  p-2">
          <NavLink to="/categoria/contacto">Contacto</NavLink>
        </li>
        <li class="nav-item  p-2">
          <NavLink to="/categoria/productos">Productos</NavLink>
        </li>
       <CartWidget/>
       <NavLink to="/categoria/productos">
       <h1 className=" titulo   "> E  V  O  T  E  C  H </h1></NavLink>
      </ul>
      
    </div>
  </div>
</nav>
)
}
export default Navbar;