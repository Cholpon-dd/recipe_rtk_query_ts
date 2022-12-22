import {Routes, Route} from "react-router-dom";
import Layouts from "./components/Layouts/Layouts";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";

function App() {


  return (
    <>
      <Layouts/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cuisine/:country" element={<Cuisine/>}/>
      </Routes>

    </>
  )
}

export default App
