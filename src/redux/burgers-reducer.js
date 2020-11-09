import {burgersAPI} from "../api/API";


const SET_BURGERS = 'SET_BURGERS';

let initialState = {
    burgers:[{name : {name: "Chicago", color: "#C9F910"}, ingredients : [ ["булка, котлета (кур.)"], [`сыр "Чеддер"`], ["лист салата"],  [`соус "красный"`], [`соус "белый"`], ["лук реп. , помидор"], ["огурец"] ], price: 125, photo:"https://i.ibb.co/h9JPGdT/1.png"},
    {name : {name: "Blueberry", color: "#5796ff"}, ingredients : [ ["булка, котлета (кур.)"], [`сыр "Чеддер" x2`], ['салат "Coleslaw"'],  [`соус "Blueberry" (джем)`] ], price: 190, photo:"https://i.ibb.co/84ywx1D/nh9-Qffg-CZuo-removebg-preview.png"},
    {name : {name: "Rostovskiy", color: "#f41d1d"}, ingredients : [ ["булка, котлета (кур.) x2"], [`сыр "Чеддер" x2`], [`соус "красный" x2`], [`соус "белый"`], ['помидор x2, огурец x2'],['лук репчатый 2'],  [`бекон x2`] ], price: 190, photo:"https://i.ibb.co/pKRp0yB/OABR1-Jty-VBI-removebg-preview.png"},
    ]
};


const burgersRuducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_BURGERS:
        debugger;
            return { ...state, burgers: action.burgers};
                
 
                default: return state;
         }
            }


export const setBurgers = (burgers) => ({type:SET_BURGERS, burgers: burgers});

 export const getBurgers = () => {
     debugger;
    return(dispatch) => {
        burgersAPI.getBurgers()
            .then(response => {
                dispatch(setBurgers(response))
            
            });
    }
}
export default burgersRuducer;