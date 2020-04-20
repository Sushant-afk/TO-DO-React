import React from 'react';
import './listitems.css';
import FlipMove from 'react-flip-move';
//import ContentEditable from 'react-contenteditable'
 
function Listitems(props)
{
   
   var entries = props.entries;
   //var key = 0;

   var listItems = entries.map((entry,key) => {key++;return (<li className = "task" key = {key}>{entry}
   <button className = "delete" onClick = {(e) => {props.delete(key)}}>Delete</button></li>)
  
   })
    
   return (
        <div>
         <FlipMove duration = {300}>{listItems}</FlipMove>
        </div>
   )
  

}
export default Listitems;
