import React, { useState } from "react"
import styled from 'styled-components'
import books from "./Books"
import "../index.css"
import "../theme.css"
import List from "./List"
import Grid from "./Grid"
import Switch from '@material-ui/core/Switch';
import notfound from "../images/notfound.webp"
const MainHead=styled.div`
margin-left: 5rem;
border-bottom: 2px solid #c7bebe;
display: flex;
justify-content: space-between;
margin-top: 50px;
@media screen and (max-width: 480px){
    margin-left: 1rem;
    border-bottom: 2px solid #c7bebe;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
`;
const BookHeadingDiv=styled.h2`
font-weight: bold;
`;
const Heading=styled.h2`
font-weight: bold;
`;
const InputWrapper=styled.div`
width: 350px;
position: absolute;
right: 0;
margin-top: 5px;
@media screen and (max-width: 480px) {
position: absolute;
margin-top: 50px;
width: 95%;
right: auto;
}
`;
const Input=styled.input`
background: #b5a3a3;
border: none;
outline: none;
border-radius: 10px;
font-size: 20px;
padding-left: 10px;
height: 30px;
margin-top: 20px;
width: 200px;
@media screen and (max-width: 480px){
height: 40px;
width: 100%;
}
`;
const GridLabel=styled.label``;
const ListLabel=styled.label`
margin-right: 20px;
`;
const SwitchDiv=styled.div`
margin-top: 20px;
margin-right: 10px;
`;
const AllBooks=styled.div`
@media screen and (max-width: 480px) {
    margin-top: 50px;
}
`;
const NotFoundDiv=styled.div`
height: 750px;
justify-content: center;
text-align: center;
`;
const NotFoundDivImage=styled.img`
height: 100px;
width: 100px;
margin-top: 100px; 
`;



function Bookcontainer(darkMode:any){
    const[search,usearch]=useState("")
    const[searchfilter,setSearchfilter]=useState([])
    
    React.useEffect(() => {
      const results:any = books.filter(person =>{
        if(person.bookName.toLowerCase().includes(search)||person.bookAuthor.toLowerCase().includes(search))return true;return false;
      });
        setSearchfilter(results);
      
    }, [search]);
  
    const [state, setState] = React.useState({
        checkedA: false,
      });

      const handleChange = (event:any) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const handleinput=(event:any)=>{
        usearch(event.target.value);
      }
    return(
     <>
     <MainHead>
       <div>
         <Heading >Book Library</Heading>
       </div>
       <InputWrapper >
         <Input type="text"  value={search} onChange={handleinput} placeholder="Search" name="searchvalue" />
       </InputWrapper>
       <SwitchDiv>
         <GridLabel >Grid</GridLabel>
         <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <ListLabel>List</ListLabel>
       </SwitchDiv>
     </MainHead>
        <AllBooks>
          {searchfilter.length>0?state.checkedA ?<List props={searchfilter}/>: <Grid props={searchfilter}/>:<NotFoundDiv><NotFoundDivImage alt="notfoundimg" src={notfound}/><h1>Not found</h1></NotFoundDiv>}
        </AllBooks>
        </>
    )}



export default Bookcontainer;