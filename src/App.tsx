import {Routes, Route} from "react-router-dom";
import './App.css'
import Layouts from "./components/Layouts/Layouts";
import Home from "./pages/Home";

function App() {


  return (
    <>
      <Layouts/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </>
  )
}

export default App
