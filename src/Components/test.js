<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>




<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>


{value.list.map((item, index) => item.id === value.choosed.id ? <li className="list-group-item active" key={item.id} id={index}>{item.title}</li> : <li className="list-group-item" key={item.id} id={index}>{item.title}</li>





<li className="list-group-item" key={item.id} id={index}>{item.title}</li>




//modal


import React, { createRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroupText, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import MyContext from './Context/Context';


const ModalExample = (props) => {
  const {
    
    className
  } = props;

  const titleInput = createRef();




  return (
        
    <MyContext.Consumer>
       {
           (value)=>{

            const updateTitle = async ()=>{
              const newTitle = value.list;
              const text = titleInput.current.value;
              /* console.log(document.getElementById('input').value); 
              */
             console.log(text);
             
              
               newTitle[value.choosed.index].title = document.getElementById('input').value;
               console.log(newTitle);
               
               value.setList(newTitle)
            }
               
           return (
             <>
              
              <Modal isOpen={value.modal} toggle={value.toggle} className={className}>
              <ModalHeader toggle={value.toggle}>{value.choosed.title}</ModalHeader>
                <ModalBody>
                {value.choosed.body}
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Edit =></InputGroupText>
                    </InputGroupAddon>
                    <Input ref={titleInput} id='input'  placeholder="New Title" />
                </InputGroup>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={()=>{
                  value.toggle();
                   updateTitle();
                }}>Save Changes</Button>{' '}
                <Button color="secondary" onClick={value.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
              </>
           )

           }
       }
   </MyContext.Consumer>



)
}

export default ModalExample;


