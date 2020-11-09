import {connect} from "react-redux";
import BurgerSlider from "./BurgerSlider";
import {changeCurrentItem} from "../../redux/mainScreen-reducer";

let mapStateToProps = (state) => {
debugger;
    return {
        currentItem: state.mainScreen.CURRENT_ITEM,
        burgers: state.burgers.burgers
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentItem: (num) => {
            dispatch(changeCurrentItem(num));
        }
    }
}

const BurgerSliderContainer = connect(mapStateToProps, mapDispatchToProps)(BurgerSlider);

export default BurgerSliderContainer;
