import CartWidget from "./CartWidget";

function Navbar (){
    return(
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/matipersia/"target="_blank">Contacto</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=Yu7LlLUR2es" target="_blank">Auriculares</a></li>
            <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=aB52h93Bax0" target="_blank">Teclados</a></li>
            <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=N3u6eEf65h4" target="_blank">Mouses</a></li>
            <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=v-OXCGvD_vw" target="_blank">Monitores</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="https://www.youtube.com/watch?v=2XXD6HcshxE" target="_blank">CPU Armadas</a></li>
          </ul>
        </li>
       <CartWidget/>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
)
}
export default Navbar;