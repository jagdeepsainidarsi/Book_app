import './App.css';
import './theme.css';
import Navbar from "./Navbar";
import React,{ useState, useEffect  } from 'react';
import Bookcontainer from "./Bookcontainer"
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
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
  {darkMode ? <WbSunnyIcon style={{fontSize:"30px"}}/> : <NightsStayIcon  style={{fontSize:"large",color:"black",fontSize:"30px"}}/>}
</button>
   <Bookcontainer/>
   </div>
  
  
  
   </>
  );
}

export default App;
