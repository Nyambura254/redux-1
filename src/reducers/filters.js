// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
   };
   //convert from Object spread to Object_assign 
  export default const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
     case 'SET_TEXT_FILTER':
       return Object.assign({}, state, {text: action.text})
   //    return {
   //     ...state,
   //     text: action.text
     // };
     case 'SORT_BY_AMOUNT':
      return {
       ...state,
       sortBy: 'amount'
      };
     case 'SORT_BY_DATE':
      return {
       ...state,
       sortBy: 'date'
      };
     case 'SET_START_DATE':
      return {
       ...state,
       startDate: action.startDate
      };
     case 'SET_END_DATE':
      return {
       ...state,
       endDate: action.endDate
      };
     default:
      return state;
    }