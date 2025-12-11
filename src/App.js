import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

 import Home from './Home'
 import About from './About'
import Contact from './Contact'
import Users from "./Users";
import Books from "./Books";
function App() {
  return (
      <BrowserRouter>
<h1>im from app</h1>
<ul>
    <Link to="/">  <li>Home</li></Link>
    <Link to="/about">  <li>About</li></Link>
    <Link to="/contact-us"> <li>Contact</li></Link>
    <Link to="/user/1"><li>user 1</li></Link>
      <Link to="/user/2"><li>user 2</li></Link>
      <Link to="/book/newbook"><li>new books</li></Link>
       <Link to="/book/oldbook"><li>old books</li></Link>
</ul>
      <Routes>
          <Route path="/" element={<Home/>}>  </Route>
          <Route path="/about" element={<About/>}>  </Route>
         <Route path="/contact-us" element={<Contact/>}>  </Route>
         <Route path="/user/:id" element={<Users/>}>  </Route>
         <Route path="/book">
         <Route path="newbook" element={<Books/>}></Route>
          <Route path="oldbook" element={<Books/>}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;