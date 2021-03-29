import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//store - stores data, think of state
// reducer - function that used to update store
//two arguments - state, action
// state - old state/ state before update
//action - what happened/ what update
// return updated or old state
//createStore looking for function or (reducer) and reducer looking for arg to update.
//dispatch method - send actions to the store
//actions(objects)-MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on immmutability(copy)
import {createStore} from "redux";
//import {INCREASE,DECREASE}  from './actions';
import reducer from './reducer';
//const store = createStore(() => {});

//react-redux-Provider-Wraps app- connect - used in components
import {Provider} from 'react-redux';

//initial store
// const initialStore= {
//     cart: cartItems,
//     total: 0,
//     amount:0
// };

/* function reducer(state, action){
  console.log({state, action});
  if (action.type===DECREASE){
    return {...state, count: state.count - 1 }
  } 
  if (action.type===INCREASE){
    return {...state,count: state.count + 1 }
  } 
  return state;
}*/

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//const store = createStore(reducer, initialStore);
//store.dispatch({type:DECREASE})



console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store = {store}>
      <Navbar  />
      <CartContainer  />
    </Provider>
  );
}

export default App;
