import '../App.css';
import '../theme.css';
import Navbar from "./Navbar";
import React,{ useState, useEffect  } from 'react';
import Bookcontainer from "./Bookcontainer"
import styled from 'styled-components'

const Container=styled.div`
font-family: sans-serif;
background-color: var(--bg-color);
color: var(--text-color);
min-height:100%;
`;

const Themebutton=styled.button`
background: none;
border: none;
position: absolute;
right: 0;
top: 0;
margin-top: 10px;
margin-right: 30px;
color: white;
z-index: 2;
`;

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    // localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);
  return (
   <>
   <Container  data-theme={darkMode ? "dark" :"light"}>
   <Navbar/>
   <Themebutton onClick={toggleDarkMode}>
       {darkMode ?<i className="fa fa-sun-o" aria-hidden="true" style={{fontSize:"30px"}}></i>:<i className="fa fa-moon-o" aria-hidden="false" style={{color:"black",fontSize:"30px"}}></i>}
   </Themebutton >
   <Bookcontainer props={darkMode ? "dark" :"light"}/>
   </Container>
   </>
  );
}

export default App;
