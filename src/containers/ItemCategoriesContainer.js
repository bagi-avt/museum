import { connect } from "react-redux";
import { categoryChangeActionCreater } from "../redux/list-exhibits-reducer";
import ItemCategories from "../components/Home/ItemCategories/ItemCategories";
let mapStateToProps = (state, item) => {
    return {
        id: item.item.id,
        text: item.item.text,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        onClickCategory: (text) => {
            console.log(text);
            dispatch(categoryChangeActionCreater(text));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCategories);
