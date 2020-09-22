import React, { useRef, useContext, useEffect, createRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroupText, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import MyContext from './Context/Context';


const ModalExample = (props) => {
  const {
    
    className
  } = props;

  const titleInput = createRef();

const value = useContext(MyContext);

const updateTitle = ()=>{
  const newTitle = value.list;
  const text = document.getElementById('input').value;
  /* console.log(document.getElementById('input').value); 
  */
  console.log(text);
 
  
   newTitle[value.choosed.index].title = text;
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
                  updateTitle();
                  value.toggle();

                }}>Save Changes</Button>{' '}
                <Button color="secondary" onClick={value.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
              </>



)
}

export default ModalExample;


