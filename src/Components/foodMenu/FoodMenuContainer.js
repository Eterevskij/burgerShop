import {connect} from "react-redux";
import {addItem, removeItem} from "../../redux/cart-reducer";
import FoodMenu from "./FoodMenu";

let mapStateToProps = (state) => {
    debugger
    return {
        burgers: state.burgers.burgers,
        cart: state.cart.cart
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
    }
}

const FoodMenuContainer = connect(mapStateToProps, mapDispatchToProps)(FoodMenu);

export default FoodMenuContainer;
