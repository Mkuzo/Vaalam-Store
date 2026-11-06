import { Route,Routes } from "react-router-dom"
import Home from "../Page/Home"
import Product from "../Page/Product"
import Contact from "../Page/Contact"
import Cart from "../Page/Cart"
import About from "../Page/About"
import Information from "../Page/Information"
export default function AppRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Product" element={<Product></Product>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
            <Route path="/Infromation" element={<Information></Information>}></Route>
        </Routes>
    )
}