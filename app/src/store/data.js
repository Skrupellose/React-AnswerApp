import { createStore } from 'redux'
import methods from './methods'
import state from './state'
let data = state
function reducer(state=data,action) {
  if (action.type.indexOf('redux') === -1) {
    state = methods[action.type](state, action)
    return { ...state }
  } else {
    return state
  }
}
const store = createStore(reducer)

export default store