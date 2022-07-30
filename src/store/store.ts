import {applyMiddleware, combineReducers, createStore} from "redux";
import {projectReducer} from "./projectReducer";
import thunk from "redux-thunk";
const reducers = combineReducers({
    projects: projectReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));