import React,{useState} from "react"
import Pop from "./Pop"
import styled from 'styled-components'
import { useEffect } from "react";

    const Head=styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 90%;
    margin-top: 20px;
    column-gap: 20px;
    row-gap: 20px;
    justify-content:center;
    @media(max-width:480px){
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 100%;
    margin-top: 20px;
    column-gap: 0px;
    row-gap: 20px;
    }

    `;
    const Container=styled.div`
    width: 250px;
    height: 420px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    @media(max-width:480px){
        width: 50%;
    height: 380px;
    padding: 10px;
    border-radius: 10px;
    }
    `;

    const Imgcontainer=styled.div`
    margin: auto;
    width: 230px;
    height: 330px;
    border-radius: 20px;
    @media(max-width:480px){
    margin: 0;
    width: 100%;
    height: 300px;
    border-radius: 20px;
    }
    `;
    const Datacontainer=styled.div`
    display: grid;
    flex-wrap: nowrap;
    margin-top: 10px;
    `;
    const Readingdiv=styled.div` 
    position: absolute;
    margin-top: 10px;
    height: 40px;
    width: 60px;
    background: #e6e0e0;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 10px;
    background: transparent;
    background-color: black;
    border-radius: 10px;
    background: rgb(119 112 112 / 80%);
    color: wheat;
    font-weight: 700;`
    ;

    const ReadingdivSpan=styled.span`
    position: absolute;
    top: 20%;`
    ;

    const GenerContainer=styled.div`
    position: absolute;
    margin-top: -70px;
    height: 50px;
    width: 100px;
    background: #e6e0e0;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 120px;
    background: transparent;
    background-color: black;
    border-radius: 15px;
    background: rgba(0,0,0,0.8);
    color: wheat;
    font-weight: 700;
    @media(max-width:480px){
    margin-top: -55px;
    height: 40px;
    width: 20%;
    margin-left: 75px;
    background-color: black;
    border-radius: 10px;
    color: black;
    background:rgb(119 112 112 / 80%);
    }
    `;

    const GenerContainerSpan=styled.span`
    position: absolute;
    top: 30%;
    @media(max-width:480px)
    {
    position: absolute;
    top: 20%;
    }
    `;

    const Img=styled.img`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    @media(max-width:480px){
    height: 100%;
    width: 100%;
    border-radius: 20px;
    }
    `;
    const BookName=styled.span`
    font-size: 20px;
    font-weight: bold;
    @media(max-width:480px){
    font-size: 16px;
    font-weight: bold;
    }
    `;
    const AuthorName=styled.span`
    opacity:0.7;
    font-size: 18px;
    @media(max-width:480px){
    font-size: 15px;
    }
    `;

const Grid=(props:any)=>{
    const [pop,setPop]=useState(false);
    const[value,setValue]=useState({});

    const popup=(data:any)=>{
        setPop(true);
        setValue(data);
              }
    return(
        <>
        <Head>
       
        {props.props.map((val:any,key:any)=>{
          
         return (
           <Container onClick={()=>{popup(val)}} key={key} >
           <Imgcontainer>
           <Readingdiv ><ReadingdivSpan>{val.readingProcess}%</ReadingdivSpan></Readingdiv>
           <Img alt=""  src={val.bookImage}></Img>
           <GenerContainer><GenerContainerSpan>{val.bookGener}</GenerContainerSpan></GenerContainer>
           </Imgcontainer>
           <Datacontainer>
           <BookName>{val.bookName}</BookName>
           <AuthorName >{val.bookAuthor}</AuthorName>
          
           </Datacontainer>
           </Container>
           )})
          
        }
            
            </Head>
           <Pop prop={value} pr={pop}/>
          
        </>
    )
}
export default Grid;

