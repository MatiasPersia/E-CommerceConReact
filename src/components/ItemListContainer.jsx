import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ItemListContainer({ greeting }) {
  const location = useLocation();

  useEffect(() => {
    console.log('La ruta ha cambiado:', location.pathname);
  }, [location]);
  return (
    <nav className=" justify-content-center navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav  mb-lg-0">
        <li className="nav-item  ">
          <Link to="/samsung">Samsung</Link>
        </li>
        <li className="nav-item">
          <Link to="/apple">Apple</Link>
        </li>
        <li className="nav-item ">
          <Link to="/xiaomi">Xiaomi</Link>
        </li>
      </ul>
    </nav>
  );
}

export default ItemListContainer;
