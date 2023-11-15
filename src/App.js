
import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
// import Home from './pages/Home';
import Navbar from './components/Navbar'
import { Container } from '@chakra-ui/react';

// import SignupCard from './pages/Signup';
// import Login from './pages/Login';
function App() {
  return (
   <div className='App'>
   <Container maxWidth="1200px">
   <Navbar/>
   </Container>
   <AllRoutes/>
   <Footer/>
 
  
   </div>
  );
}

export default App;
