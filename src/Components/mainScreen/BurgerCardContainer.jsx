import {connect} from "react-redux";
import BurgerCard from "./BurgerCard";
import {changeCurrentItem} from "../../redux/mainScreen-reducer";

let mapStateToProps = (state, props) => {
    debugger;
    return {
        currentItem: state.mainScreen.CURRENT_ITEM,
        burgers: props.burgers
    }
}

const BurgerSliderContainer = connect(mapStateToProps)(BurgerCard);

export default BurgerSliderContainer;
