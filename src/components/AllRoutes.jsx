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
import { PrivateRoute } from "./PrivateRoute"
import Payment  from "../pages/CheckoutPage"


function AllRoutes(){
return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/results" element={<PrivateRoute><Results/></PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute><Courses/></PrivateRoute>} />
        <Route path="/blogs" element={<PrivateRoute><Blogs/></PrivateRoute>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/courses/:id" element={<PrivateRoute><SingleCoursePage/></PrivateRoute>}/>
        <Route path="/lectures/" element={<PrivateRoute><Lectures/></PrivateRoute>} />
        <Route path="/signup" element={<SignupCard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path="/payment" element={<Payment/>} />


    </Routes>
)
}


export default AllRoutes
