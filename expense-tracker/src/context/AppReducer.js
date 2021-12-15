export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state, //return our initial state
        transactions: [action.payload, ...state.transactions] // spread take all the values from array
      }
    default:
      return state;
  }

}
