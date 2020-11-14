import  {applyMiddleware, combineReducers, createStore} from "redux";
import mainScreenReducer from "./mainScreen-reducer";
import cartReducer from './cart-reducer';
import burgersReducer from './burgers-reducer';
import sortReducer from './sort-reducer';
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    mainScreen: mainScreenReducer,
    cart: cartReducer,
    burgers: burgersReducer,
    sort: sortReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

store.subscribe(()=>{console.log("Хрнанилище обновлено!", store.getState());})

window.store = store;

export default store;