import { useState,useEffect } from 'react'; 
import Nav from './Components/Nav'
import Home from './Components/Home'
import Lenis from 'lenis'
import { Routes,Route,} from 'react-router'


const App = () => {
  const[mode,setMode]=useState({
    color:"black",
    backgroundColor:"white"
  });
  const [modeName, setModeName] = useState("Dark Mode !");
  // block that save the toggle input in local storage

  useEffect(() => {
    const data=localStorage.getItem('mode');
    if(data){
      const parsemode=JSON.parse(data);// parse the json data to the variable
      setMode(parsemode);
      setModeName(parsemode.color==="black"?"Dark Mode !":"Light Mode !");
    }

    // lenis based smooth scrolling

      const lenis = new Lenis({
      });
      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);
  
  }, []);
  const toggle = () => {
    const isDark = mode.color === "black";
    const newMode = {
      color: isDark ? "white" : "black",
      backgroundColor: isDark ? "black" : "white"
    };

    setMode(newMode);
    setModeName(isDark ? "Light Mode !" : "Dark Mode !");
    localStorage.setItem('mode', JSON.stringify(newMode)); //converts object type data to string or in json format
    localStorage.setItem('modeName',modeName);
  };


  return (
    <>
    <div style={mode}>
    <Nav act={toggle}/>
      {/* <p className=' absolute text-xs font-semibold z-10 right-6 top-16'>{modeName}</p> */}
           <Routes>
            <Route path='/' element={<Home/>}/>
            {/* Previously used work but not use any more maybe used in future */}
            {/* <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Project/>}/>
            <Route path='/resume' element={<Resume/>}/> */}
          </Routes> 
    </div>
    </>
  )
}

export default App

