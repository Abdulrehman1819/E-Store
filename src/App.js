import logo from './logo.svg';
import './App.css';
import Home from './Home'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar'
import Products from './Products';
import Product  from './components/Product';
import SingleProduct from './SingleProduct';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import CME from './components/CME'
function App() {
  return (
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}>
    </Route>
    <Route path='about' element={<About></About>}></Route>
    <Route path='contact' element={<Contact></Contact>}></Route>
    <Route path='/singleproduct/:id' element={<SingleProduct></SingleProduct>}></Route>
    <Route path='products' element={<Products></Products>}></Route>
    <Route path='Login' element={<Login></Login>}></Route>
    <Route path='CME' element={<CME></CME>}></Route>
    <Route path='Signup' element={<Signup></Signup>}></Route>
    <Route path='cart' element={<Cart></Cart>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
