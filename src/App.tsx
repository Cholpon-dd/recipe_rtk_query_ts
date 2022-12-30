import {Routes, Route} from "react-router-dom";
import Layouts from "./components/Layouts/Layouts";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Category from "./pages/Category";
import Details from "./components/Details/Details";
import Favourites from "./pages/Favourites";
import Footer from "./components/Layouts/Footer";
import NotFound from "./pages/NotFound";

function App() {


  return (
    <>
      <Layouts/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cuisine/:country" element={<Cuisine/>}/>
          <Route path="/category/:type" element={<Category/>}/>
          <Route path="favourites" element={<Favourites/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
        <Footer/>

    </>
  )
}

export default App
