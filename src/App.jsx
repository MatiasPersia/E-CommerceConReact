import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
    <header>
      <h1>E V O T E C H 🎱 </h1>
      <NavBar/>
    </header>
    <ItemListContainer/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App;