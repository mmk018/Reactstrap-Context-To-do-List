import React,{useState, useEffect} from 'react';
import MyContext from './Components/Context/Context';
import data from './data.json';
import './App.css';
import NoteView from'./Components/NoteView';
import NoteList from './Components/NoteList';

import ModalExample from './Components/ModalExample';



function App() {
  
  const [list, setList] = useState(data);
  const [choosed, setChoosed] = useState({});
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  useEffect(() => {
    console.log(choosed);
    
    
  }, [choosed])

  return (
    <div className="App">
     <MyContext.Provider value={{list,setList,choosed, setChoosed,modal,setModal,toggle}}>
        <NoteList></NoteList>
        <NoteView></NoteView>
       
        <ModalExample></ModalExample>
        
     </MyContext.Provider>
    </div>
  );
}

export default App;
