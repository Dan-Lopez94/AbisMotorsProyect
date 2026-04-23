import { Routes, Route } from "react-router-dom";
import Category from "./Components/Category";
import Home from "./Components/Home";


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>

  )
}
