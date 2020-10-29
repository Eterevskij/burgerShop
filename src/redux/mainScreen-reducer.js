const CHANGE_CURRENT_ITEM = 'CHANGE_CURRENT_ITEM';

let initialState = {
    CURRENT_ITEM: 0
};


const mainScreenReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CURRENT_ITEM:
            debugger;
            return { ...state, CURRENT_ITEM: action.itemNum};
                
 
                default: return state;
         }
            }




export const changeCurrentItem = (itemNum) => ({type: CHANGE_CURRENT_ITEM, itemNum })

export default mainScreenReducer;