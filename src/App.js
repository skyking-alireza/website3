import {Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./component/navbar";
import Signup from './pages/signup'
import Login from "./pages/login";
function App() {
  return (
      <>
          <Navbar />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/signup' element={<Signup />} />
          <Route  path='/signin' element={<Login />} />
        </Routes>
      </>
  );
}

export default App;
