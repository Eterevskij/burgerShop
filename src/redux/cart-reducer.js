const ADD_BURGER = 'ADD_BURGER';
const REMOVE_BURGER = 'REMOVE_BURGER'

let initialState = {
    cart:[]
};

let id, searchItem;


const cartReducer = (state = initialState, action) => {

     let findItemInCart = (itemId) => {
        if(state.cart.length == 0) {return -1};

          for(let i = 0; i <  state.cart.length; i++){
            if( state.cart[i].id === itemId){
                return(i);
          }

      
    };
    return -1;
}

    switch(action.type) {
        
        case ADD_BURGER:
                    id = action.id;
                    searchItem = findItemInCart(id);

                    if(searchItem === -1){      //if elem doesn't exsist
                        return {
                            ...state, 
                            cart: [...state.cart, {id: id, count: 1}  ]}
                    } else {
                        return {
                            ...state, 
                            cart: state.cart.map( u =>  {
                                if (u.id === searchItem) {
                                    return {...u, count: u.count + 1}
                                }
                                return u;
                            })}
                     }



                case REMOVE_BURGER:
                    debugger;
                        id = action.id;
                        searchItem = findItemInCart(id);

                        state.cart.map( (u, num1) =>  {
                            if (u.count === 1) {
                                state.cart.map( (i, num2) =>  {
                                    if(state.cart[num2].id == state.cart[num1].id){
                                        return{...state, ...state.cart.splice(state.cart[num2], 1)};
                                    }
                                })
                            }
                        })

                        return {
                            ...state, 
                            cart: state.cart.map( u =>  {
                                if (u.id === searchItem) {
                                    return {...u, count: u.count - 1}
                                }
                                return u;
                            })}
    



                default: return state;
         }
            }



export const addItem = (id) => ({type: ADD_BURGER, id });
export const removeItem = (id) =>({type: REMOVE_BURGER, id});

export default cartReducer;