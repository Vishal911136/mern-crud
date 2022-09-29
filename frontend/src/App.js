import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route ,Routes} from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/edituser/:id" element={<EditUser/>} />
      </Routes>
    
    </>
  );
}

export default App;
