import {createStore} from 'redux'

// action type
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

// action creator
const login = () => {
  return {type: LOGIN}
}
const logout = () => {
  return {type: LOGOUT}
}

const initialState = {
  auth: {
    isAuthenticated: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
        return Object.assign({}, state, {auth:{isAuthenticated: true }})
      break;
    case LOGOUT:
      return Object.assign({}, state, {auth: {isAuthenticated: false}})
    default:

  }
  return state;
}

const store = createStore(reducer)

store.subscribe(()=>{ console.log('Store changed:', store.getState()); })

store.dispatch(login())
store.dispatch(logout())
