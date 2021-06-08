import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components'

const Container=styled.div`
position: fixed;
z-index: 1;
padding-top: 80px;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.4);
@media (min-width: 481px) and (max-width: 991px){
padding-top: 40px;
}
`;
const ContainerInside=styled.div`
background-color: #fefefe;
margin: auto;
padding: 30px;
border: 1px solid #888;
width: 60%;
height: auto;
@media (min-width: 481px) and (max-width: 991px) {
width: 70%;
}
@media screen and (max-width: 480px) {
width: 95%;
overflow: auto;
}
`;
const CroseIcon=styled.span`
color: #aaaaaa;
  float: right;
  font-size: 32px;
  font-weight: bold;
  &:hover{
      color: #000;
     text-decoration: none;
     cursor: pointer;

  }
`;
const Wrapper=styled.div`
margin-top: 3rem;
width: 100%;
`;
const BookWrapper=styled.div`
padding: 10px;
width: 70%;
margin: auto;
@media (min-width: 481px) and (max-width: 991px){
padding: 0px;
width: 80%;
height: auto;
}
@media screen and (max-width: 480px){
padding: 0px;
width: 100%;
height: auto;
}
`;
const ImageDataWrapper=styled.div`
width: 100%;
padding: 10px;
border: 3px solid gainsboro;
border-radius: 5px;
@media (min-width: 481px) and (max-width: 991px) {
padding: 40px;
}
@media screen and (max-width: 480px){
padding: 40px;
}
`;
const Img=styled.img`
width: 200px;
height: 200px;
@media screen and (max-width: 480px) {
width: 100%;
}
`;
const List=styled.li`
list-style: none;
`;
const SBookName=styled.span`
color:black;
font-size: 20px;
font-weight: bold;
@media screen and (max-width: 480px) {
font-size: 16px;
}
`;
const SAuthorName=styled.span`
font-size: 17px;
color:black;
opacity: 0.7;
font-weight: bolder;
@media screen and (max-width: 480px){
font-size: 14px;
}
`;
const SDesc=styled.span`
color:black;    
`;


const Pop=(props:any)=>{
    const[val,setval]=useState(props.pr)
    const[A,Sa]=useState(props.prop);
    console.log(props)
    console.log(props.pr)
    const close=()=>{
        setval(false);
        // props.pr=false;
        
               
    }
    useEffect(()=>{
        setval(props.pr);
    },[props.prop]);
  
  
    return(
        <>
        {val? <Container >
        <ContainerInside >
        <CroseIcon onClick={close}>&times;</CroseIcon>
        <Wrapper >
        <BookWrapper >
        <ImageDataWrapper>
            <Img alt="" src={props.prop.bookImage} />
             <ul>
             <List><SBookName >{props.prop.bookName}</SBookName></List>
             <List><SAuthorName>By {props.prop.bookAuthor}</SAuthorName></List>
             <List><SDesc >{props.prop.Desc}</SDesc></List>
             </ul>
        </ImageDataWrapper>
        </BookWrapper>
        </Wrapper>
        </ContainerInside>
        </Container>:null}
       </>
    )
}

export default Pop;