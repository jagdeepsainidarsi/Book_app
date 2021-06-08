import './App.css';
import './theme.css';
import Navbar from "./Navbar";
import React,{ useState, useEffect  } from 'react';
import Bookcontainer from "./Bookcontainer"

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);
  return (
   <>
   <div className="App" data-theme={darkMode ? "dark" :"light"}>
   <Navbar/>
   <button onClick={toggleDarkMode}  className="modebutton">
  {darkMode ?<i className="fa fa-sun-o" aria-hidden="true"></i>  : <i className="fa fa-moon-o" aria-hidden="false" id="moon"></i>}
</button>
   <Bookcontainer/>
   </div>
  
  
  
   </>
  );
}

export default App;
