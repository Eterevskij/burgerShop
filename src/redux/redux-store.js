import  {combineReducers, createStore} from "redux";
import mainScreenReducer from "./mainScreen-reducer";

let reducers = combineReducers({
    mainScreen: mainScreenReducer
});

let store = createStore(reducers);

window.store = store;

export default store;