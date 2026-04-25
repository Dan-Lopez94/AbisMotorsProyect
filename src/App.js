import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category"
import Header from "./Components/Header";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
