import {Routes, Route} from "react-router-dom";
import Layouts from "./components/Layouts/Layouts";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Category from "./pages/Category";
import Favourites from "./pages/Favourites";

function App() {


  return (
    <>
      <Layouts/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cuisine/:country" element={<Cuisine/>}/>
          <Route path="/category/:type" element={<Category/>}/>
         <Route path="favourites" element={<Favourites/>}/>
      </Routes>

    </>
  )
}

export default App
