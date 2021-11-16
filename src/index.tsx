import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider, TypedUseSelectorHook, useSelector} from 'react-redux';
import { createStore } from 'redux';

interface themeState {
  colored: number
}
export enum UserActionTypes{
  DARK_THEME= 'DARK_THEME',
  WHITE_THEME = 'WHITE_THEME',

}
interface DarkAction {
  type: UserActionTypes.DARK_THEME,
  payload: 0
}
interface WhiteAction{
  type:  UserActionTypes.WHITE_THEME,
  payload: 0

}

type ThemeAction = DarkAction | WhiteAction;

const themeColor: themeState = {
  colored : 2,

}
/*Хук для использования данных в useSelector */
type RootState = ReturnType<typeof colorReducer>
export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
/*end */

const colorReducer = (state = themeColor,action: ThemeAction ) : themeState => {
 switch (action.type) {
    case  UserActionTypes.DARK_THEME:
return {...state, colored: state.colored = action.payload}
      case UserActionTypes.WHITE_THEME:
return {...state, colored: state.colored = action.payload}
   default:
   return state


 }
}
const store = createStore(colorReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />

    </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
