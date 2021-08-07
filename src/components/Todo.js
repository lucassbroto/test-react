/* 
className = "card" - will create a card around the button and title
className = "actions" - assing an action structure to the region under the title
className = "btn" - assign the clicking capaciti to the button

{xxx ? yyyy : zzz - ternary expression if xxx is true return yyyy else zzzz
xxx && yyyy - if xxxx and yyyy are both true return the second value}
*/
import {useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen] = useState(false);  

  function deleteHandler() {
      setModalIsOpen(true);
  };
  
  function closeModalHandler(){
      setModalIsOpen(false);
  }

  return (
    <div className="card ">
      <h2>{props.text} </h2>
      <div className="actions">
        <button className="btn" onClick = {deleteHandler}>Sim</button>
      </div>
      {modalIsOpen ? <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler}/> : null}
      {modalIsOpen && <Backdrop outClick = {closeModalHandler}/>}
    </div>
  );
}


export default Todo;
