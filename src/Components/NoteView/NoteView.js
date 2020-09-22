import React, { Component } from 'react';
import MyContext from '../Context/Context';


export class NoteView extends Component {
    render() {

        const id = this.context.choosed.id;
        const updateList = async ()=>{
             const newList = await  this.context.list.filter(function (e, index) {
                 /* console.log(index); */
                 
                return e.id !== id;//why not working this.context.choosed.id
              });
              this.context.setList(newList);
              
              
        }
        



        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
               
                <div className="card-body">
                    <h5 className="card-title">{this.context.choosed.title}</h5>
                    <p className="card-text">{this.context.choosed.body}</p>
                </div>
                
                <div className="card-body">
                   
                    <button onClick={()=>{this.context.setModal(true)}} style={{margin:'10px'}} type="button" className="btn btn-danger btn-outline-secondary">Edit</button>
                    <button onClick={updateList} style={{margin:'10px'}} type="button" className="btn btn-outline-secondary">Delete</button>
                </div>
                </div>
            </div>
        )
    }
}


NoteView.contextType = MyContext;

export default NoteView
