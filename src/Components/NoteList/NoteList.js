import React from 'react';
import MyContext from '../Context/Context';

function NoteList() {
    
    return (
        
        <MyContext.Consumer>
           {
               (value)=>{
                   
               return (
              
                <ul onClick={(e)=>{
                    value.setChoosed({...value.list[e.target.id], index: e.target.id})
                }} className="list-group">
                {value.list.map((item, index) =>
                   item.id === value.choosed.id ? <li className="list-group-item active" key={item.id} id={index}>{item.title}</li> : <li className="list-group-item" key={item.id} id={index}>{item.title}</li>
                )}
                
              </ul>
               )
 
               }
           }
       </MyContext.Consumer>



    )
}

export default NoteList
