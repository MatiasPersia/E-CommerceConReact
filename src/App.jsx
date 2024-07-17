import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter , Link} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/inicio">
          <h1 className=" titulo centrado"> E  V  O  T  E  C  H </h1>
        </Link>
        <NavBar/>
      </header>
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;