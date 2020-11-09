import {connect} from "react-redux";
import BurgerCard from "./BurgerCard";
import {addItem, removeItem} from "../../redux/cart-reducer";






let mapStateToProps = (state) => {

    return {
        currentItem: state.mainScreen.CURRENT_ITEM,
        burgers: state.burgers.burgers,
        cart: state.cart.cart
    }
}

let mapDispatchToProps = (dispatch) => {

    let findItemInCart = (cart,current_item) => {
        if(cart.length == 0) {return -1};
    
          for(let i = 0; i <  cart.length; i++){
            if( cart[i].id === current_item){
                return(i);
          }
    };
    return -1;
    }

    return {
        addBurger: (id) => {
            dispatch(addItem(id));
        },

        removeBurger: (id) =>{
            dispatch(removeItem(id));
        },

        findItemInCart: (cart, current_item) => {
            return(findItemInCart(cart, current_item));
        },
    }
}






const BurgerCardContainer = connect(mapStateToProps, mapDispatchToProps)(BurgerCard);


export default BurgerCardContainer;


