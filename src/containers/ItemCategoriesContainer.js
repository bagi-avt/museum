import { connect } from "react-redux";
import { categoryChangeActionCreater } from "../redux/list-exhibits-reducer";
import ItemCategories from "../components/Home/ItemCategories/ItemCategories";
let mapStateToProps = (state, item) => {
    console.log(item);
    return {
        id: item.item.id,
        nameCategory: item.item.nameCategory,
        urlPhotoCategory: item.item.urlPhotoCategory,
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
