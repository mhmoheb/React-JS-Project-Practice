import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: []   
};
// Create context
export const GlobalContext = createContext(initialState);



//Provider component wrap around all components, then the components access to initial state 
//children is all components
export const GlobalProvider = ({children}) => {
     const [state, dispatch] = useReducer(AppReducer, initialState);

     // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

    function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

     return (<GlobalContext.Provider value = {{
         transactions: state.transactions,
         deleteTransaction,
         addTransaction
     }}>
         {children}
     </GlobalContext.Provider>);
}