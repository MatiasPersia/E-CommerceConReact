import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;