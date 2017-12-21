import { combineReducers } from 'redux'

export const itemsHasErrored = (state = false, action) => {
  switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
          return action.hasErrored;
      default:
          return state;
  }
}
export const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
      case 'ITEMS_IS_LOADING':
          return action.isLoading;
      default:
          return state;
  }
}
export const items = (state = [], action) => {
  switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          return action.items;
      default:
          return state;
  }
}

const reducer = combineReducers({
    itemsHasErrored,
    itemsIsLoading,
    items
  })
  
  export default reducer
// const reducer = (state = { launches: []}, action) => {
//     switch (action.type) {
//       case 'LOAD_LAUNCHES':
//         return [
//           ...state,
//           {
//             id: action.id,
//             launches: action.launches
//           }
//         ]
//       default:
//         return state
//     }
//   }
  
//   export default reducer