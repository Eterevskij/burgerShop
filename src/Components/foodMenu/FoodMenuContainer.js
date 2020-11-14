import {connect} from "react-redux";
import {addItem, removeItem, invertSortDirection} from "../../redux/cart-reducer";
import FoodMenu from "./FoodMenu";
import {orderBy, filter} from 'loadsh';
import {setFilterByCategory} from '../../redux/sort-reducer';



let mapStateToProps = (state) => {

    const sortArrBy = (arr) => {
        debugger;
        return orderBy(arr, 'price', state.cart.isDesc ? "desc" : "asc");
    }

    const filterArr = (arr) => {
        let category = state.sort.currentCategory;

        if(category === "all") return state.burgers.burgers;

        return filter(arr, (item) => item.type === state.sort.currentCategory) 
    }
    
    return {
        burgers: sortArrBy(filterArr(state.burgers.burgers)),
        cart: state.cart.cart,
        isDesc: state.cart.isDesc,
        currentCategory: state.sort.currentCategory
    }
}
let mapDispatchToProps = (dispatch) => {

    let findItemInCart = (cart, id) => {
        if(cart.length == 0) {return -1};
    
          for(let i = 0; i <  cart.length; i++){
            if( cart[i].id === id){
                return(i);
          }
    };
    return -1;
    }

    return {
        addItem: (id) => {
            dispatch(addItem(id));
        },

        removeItem: (id) => {
            dispatch(removeItem(id));
        },

        findItemInCart: (cart, id) => {
            return findItemInCart(cart, id)
        },
        invertSortDirection: () => {
            dispatch(invertSortDirection())
        },
        setFilterByCategory: (category) => {
            dispatch(setFilterByCategory(category));
        },
    }
}

const FoodMenuContainer = connect(mapStateToProps, mapDispatchToProps)(FoodMenu);

export default FoodMenuContainer;
