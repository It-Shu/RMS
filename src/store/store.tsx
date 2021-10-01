import {createStore ,combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({

})


export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store