import React,{useState,useEffect} from "react"
import Pop from "./Pop"
import styled from 'styled-components'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

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
height:100%;
`;

const DataContainer=styled.div`
height: 600px;
 width: 100%;

`;




const List=(props:any)=>{
    const [pop,setPop]=useState(false);
    const [value,setValue]=useState({});
    var gridOptions = {
        rowHeight: 120,
        rowStyle: {'margin-bottom':'20px'},
        
    };
    const staticCellStyle = {'font-size':'20px','opacity':'0.8'};
 
    const getdara=(params:any)=>{
            // console.log(params);
            setPop(true)
            setValue(params.data)
        }
    function AllCellRenderer(params:any) {
        var flag =
        '<img border="0" style="border-radius: 15px" width="60" height="100" src='+params.data.bookImage+' onClick=""/>';
        return (
        '<div style="cursor: default;display:inline-flex"  >' + flag +'<div style="margin-left:10px;margin-top:20px;font-weight:bold">'+'<span >'+params.data.bookName+'</span>'+'</br>'+'<span style="font-size:16px;font-weight:100">'+params.data.bookAuthor+ '</span>'+'</div>' +  '</div>'
          );
          }

    function ReadingProcessRenderer(params:any){
        return(
        '<span >'+params.data.readingProcess+"%"+'</span>'
        )
        }
       
    return(
        <>
        <Section >
        <BookContainer>
           <DataContainer className="ag-theme-alpine" >
           <AgGridReact gridOptions={gridOptions}   defaultColDef={{
            flex: 1,
            minWidth: 250,
            resizable: true,
            }}
            rowData={props.props}>
               <AgGridColumn field="bookName"   minWidth={300} sortable={ true } cellRenderer={AllCellRenderer} cellStyle={staticCellStyle} onCellClicked={getdara}></AgGridColumn>
               <AgGridColumn field="bookGener" minWidth={300} sortable={ true } cellStyle={staticCellStyle} onCellClicked={getdara}></AgGridColumn>
               <AgGridColumn field="readingProcess" minWidth={300} sortable={ true } cellStyle={staticCellStyle} cellRenderer={ReadingProcessRenderer}></AgGridColumn>
               <AgGridColumn field="lastOpened" minWidth={300} sortable={ true } cellStyle={staticCellStyle}></AgGridColumn>
           </AgGridReact>
       </DataContainer>
        </BookContainer>
        </Section>
        <Pop prop={value} pr={pop}/>
        </>
    )
}
export default List;
