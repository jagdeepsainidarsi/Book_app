import React from "react";
import '../index.css';
import styled from 'styled-components'
const Nav=styled.div`
height: 50px;
background: #706c6c;
text-align: center;
color: white;
font-size: 20px;
width: 100%;
z-index: 1;
`;
function Navbar(){
return(
    <>
    
    <Nav>
    <label>Book App</label>
    
    </Nav>
   
    
       
    </>
)
}

export default Navbar;