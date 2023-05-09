import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Results from "../pages/Results"
import Courses from "../pages/Courses"
import Blogs from "../pages/Blogs"
import Contact from "../pages/Contact"
import Lectures from "../pages/Lectures"
import SignupCard from "../pages/Signup"
import Login from "../pages/Login"
import SingleCoursePage from "../pages/SingleCoursePage"
import Cart from "../pages/Cart"


function AllRoutes(){
return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/courses/:id" element={<SingleCoursePage/>}/>
        <Route path="/lectures/" element={<Lectures/>} />
        <Route path="/signup" element={<SignupCard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />

    </Routes>
)
}


export default AllRoutes
