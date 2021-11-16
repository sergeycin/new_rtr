import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserActionTypes, useTypesSelector } from '.';



const App: React.FC = () => {

  const dispatch = useDispatch()

  /*UseTypesSelector свой хук который работает с нашими типами на основе UseSelector */
  const colored = useTypesSelector(state => state.colored)

  console.log(colored);

  const whiteHandler = () =>{
    dispatch({type: UserActionTypes.WHITE_THEME, payload: 1})
  }

  const darkHendler = () =>{
    dispatch({type: UserActionTypes.DARK_THEME, payload: 0})
  }

  function bodyclass () {
    if(colored == 0){
      document.body.style.backgroundColor = "black";
    }
    else{
      document.body.style.backgroundColor = "white";
    }
  

  }
  bodyclass ();
  return (
    <div className="wrapper">
    <div className="buttons">

      <button className="white" onClick={() => whiteHandler()} >Светлая тема</button>
      <button className="dark" onClick={() => darkHendler()}>Темная тема</button>
    </div>
    </div>

  );
}

export default App;
