import React, { useState } from "react"
import books from "./Books"
import "./index.css"
import "./theme.css"
import Switch from '@material-ui/core/Switch';
function Bookcontainer(){
    const [pop,setPop]=useState(false);
    const [notfound,setNotfound]=useState(false);
    const[book,setBook]=useState(books);
    const[search,usearch]=useState("")
    const[searchfilter,setSearchfilter]=useState([])
    const [value,setValue]=useState({
        bookName:"",
        bookAuthor:"",
        bookPrice:"",
        bookGener:"",
        bookImage:null,
        Desc:""
    })
    React.useEffect(() => {
      const results = book.filter(person =>
        person.bookName.toLowerCase().includes(search)
      );
     
      

        setSearchfilter(results);
      
    }, [search]);
  
    const [state, setState] = React.useState({
        checkedA: false,
        
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const popup=(data)=>{
console.log(data);
setPop(true);
setValue({bookName:data.bookName,bookAuthor:data.bookAuthor,bookPrice:data.bookPrice,bookGener:data.bookGener,bookImage:data.bookImage,Desc:data.Desc})
      }

      const handleinput=(event)=>{
        const {name,value}=event.target;
      
        usearch(event.target.value);
      }
      if(searchfilter.length==0){
        return (
          <>
          <div  className="librarydiv">
          <div className="bookheading">
          <h2 >Book Library</h2>
          </div>
          <div className="inputdiv">
     
        <input type="text"  value={search.searchvalue} onChange={handleinput} placeholder="Search" name="searchvalue" />
       
        </div>
          <div className="switch">
          <label className="gridlabel" >Grid</label>
          <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <label className="listlabel">List</label>
          </div>
          </div>
          <div className="view"><div className="notfounddiv"><h1>Not found</h1></div></div>
          </>
        )
      }
      else{
    return(
     <>
    
     <div  className="librarydiv">
     <div className="bookheading">
     <h2 >Book Library</h2>
     </div>
     <div className="inputdiv">

   <input type="text"  value={search.searchvalue} onChange={handleinput} placeholder="Search" name="searchvalue" />
  
   </div>
     <div className="switch">
     <label className="gridlabel" >Grid</label>
     <Switch
     checked={state.checkedA}
     onChange={handleChange}
     name="checkedA"
     inputProps={{ 'aria-label': 'secondary checkbox' }}
   />
   <label className="listlabel">List</label>
     </div>
     </div>
        <div className="view">
      
      {state.checkedA ?
        <section id="books_container">
        <div id="bookcontainerinside">
        <table>
        <thead>
        <tr id="upper">
        <th id="left">Book Title & Author</th>
        <th id="left1">Genre</th>
        <th id="right" >Reading Progress</th>
        <th id="right1">Last Opened</th>
        
        </tr>
        </thead>
        <tbody>
        {
        searchfilter.map((val,key)=>{
            return (
              <tr key={key}>
              <td >
              <div className="left_container" key={key}  >
              <div className="imgdiv" onClick={()=>{popup(val)}}>
              <img  alt="" src={val.bookImage}/>
             
              </div>
              <div className="datadiv">
              <ul >
              <li><span className="bookname">{val.bookName}</span></li>
              <li><span  className="authorname">{val.bookAuthor}</span></li>
              
              </ul>
              </div>
              </div>
              </td>
              <td id="left1">{val.bookGener}</td>
              <td id="right"> {val.readingProcess}%</td>
              <td id="right1">{val.lastOpened}</td>
              </tr>
              )})}
              </tbody>
        </table>
        </div></section>
           
       : <div className="head">
       
       {searchfilter.map((val,key)=>{
         
        return (
          <div className="container" onClick={()=>{popup(val)}} key={key} >
          <div className="imgdiv1">
          <div className="readingdiv"><span>{val.readingProcess}%</span></div>
          <img alt="" className="img" src={val.bookImage}/>
          <div className="genrediv"><span>{val.bookGener}</span></div>
          </div>
          <div className="datadiv1">
          <span className="bookname">{val.bookName}</span>
          <span className="authorname1">{val.bookAuthor}</span>
         
          </div>
          </div>
          )})
         
       }
           
           </div>}
        
           </div>
           
           {pop?
            <div id="containerbuy" className="containerbuy">

        <div className="containerinsidebuy">
             <span className="close" onClick={()=>{setPop(false)}}>&times;</span>
            <div className="innerpartbuy">
        
        
        <div className="bookcontainerbuy">
            <div className="imagecontainerbuy">
                <img alt="" src={value.bookImage} id="buyimage"/>
                 <ul>
                 <li><span id="buybookname" className="bookname">{value.bookName}</span></li>
                 <li className="bookauthorli"><span id="buybookauthor" className="authorname">By {value.bookAuthor}</span></li>
                 <li className="stock"><span>In stock</span></li>
                 <li><span className="desc">{value.Desc}</span></li>
               
                 </ul>
            </div>
            <div>
               
            </div>
        </div>
        </div>
       
        </div>
      
      </div>
            :null}
        </>
    )}

}

export default Bookcontainer;