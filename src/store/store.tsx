import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {enterReducer} from "./redusers/enter-reducer";

const rootReducer = combineReducers({
    disabled: enterReducer
})


export type AppRootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store