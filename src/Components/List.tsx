import React,{useState,useEffect} from "react"
import Pop from "./Pop"
import styled from 'styled-components'

const Section=styled.section`
width:100%;
padding: 50px 50px 10px 50px;
@media (min-width: 481px) and (max-width: 991px){
padding: 50px 40px 50px 40px;
}
@media(max-width:480px){
padding: 50px 10px 10px 10px;
}
`;

const BookContainer=styled.div`
width: 100%;
margin: auto;
`;
const LeftContainer=styled.div`
display: flex;
flex-wrap: nowrap;
@media (min-width:481px) and (max-width: 991px) {
display: flex;
column-gap: 20px;
width:100%;
}
@media screen and (max-width: 480px) {
display: flex;
flex-wrap: nowrap;
}
`;
const ImageContainer=styled.div`
width: 21%;
padding: 20px;
height: 150px;
margin-left: 10px;
padding-left: 0px;
cursor: pointer;
@media (min-width:481px) and (max-width: 991px) {
width: 100px;
}
@media screen and (max-width: 480px){
width: 80px;
height: 130px;
}
`;
const Img=styled.img`
width: 100%;
height: 100%;
border-radius: 15px;
`;
const DataContainer=styled.div`
padding: 20px;
margin-left: -2rem;
margin-top:20px;
@media screen and (max-width: 480px) {
padding: 20px;
margin-left: -3rem;
}
`;
const Ulist=styled.ul`
`;
const Llist=styled.li`
list-style: none;
`;
const SBookName=styled.span`
font-size: 20px;
font-weight: bold;
@media screen and (max-width: 480px){
font-size: 16px;
}
`;
const SAuthorName=styled.span`
font-size: 17px;
opacity: 0.7;
font-weight: bolder;
@media screen and (max-width: 480px){
font-size: 14px;
opacity: 0.7;
font-weight: bolder;
}
`;
const Th1=styled.th`
width: 500px;
@media screen and (max-width: 480px){
width: 65%;
}
`;
const Th2=styled.th`
width: 400px;
display: revert;
@media screen and (max-width: 480px){
width: 50%;
display: none;
}
`;
const Th3=styled.th`
width: 300px;
text-align: left;
@media screen and (max-width: 480px){
width: 35%;
text-align: right;
}
`;
const Th4=styled.th`
width: 300px;
display: revert;
@media screen and (max-width: 480px){
width: 300px;
display: none;
}
`;
const Td2=styled.td`
width: 400px;
display: revert;
@media screen and (max-width: 480px){
width: 50%;
display: none;
}
`;
const Td3=styled.td`
width: 300px;
text-align: left;
@media screen and (max-width: 480px){
width: 35%;
text-align: right;
}
`;
const Td4=styled.td`
width: 300px;
display: revert;
@media screen and (max-width: 480px){
width: 300px;
display: none;
}
`;



const List=(props:any)=>{
    const [pop,setPop]=useState(false);
    const [value,setValue]=useState({})
    const popup=(data:any)=>{
        setPop(true);
        setValue(data)  
        }
       
    return(
        <>
        <Section >
        <BookContainer>
        <table>
        <thead>
        <tr>
        <Th1 >Book Title & Author</Th1> 
        <Th2 >Genre</Th2>
        <Th3  >Reading Progress</Th3>
        <Th4 >Last Opened</Th4>
        
        </tr>
        </thead>
        <tbody>
        {
        props.props.map((val:any,key:any)=>{
            return (
              <tr key={key}>
              <td >
              <LeftContainer key={key}  >
              <ImageContainer  onClick={()=>{popup(val)}}>
              <Img  alt="" src={val.bookImage}/>
              </ImageContainer>
              <DataContainer>
              <Ulist >
              <Llist><SBookName >{val.bookName}</SBookName></Llist>
              <Llist><SAuthorName  >{val.bookAuthor}</SAuthorName></Llist>
              </Ulist>
              </DataContainer>
              </LeftContainer>
              </td>
              <Td2>{val.bookGener}</Td2>
              <Td3 > {val.readingProcess}%</Td3>
              <Td4 >{val.lastOpened}</Td4>
              </tr>
              )})}
              </tbody>
        </table>
        </BookContainer></Section>
        <Pop prop={value} pr={pop}/>
        </>
    )
}
export default List;