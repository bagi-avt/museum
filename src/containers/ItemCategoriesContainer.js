import { connect } from "react-redux";
import { categoryChange } from "../redux/exhibits-reducer";
import ItemCategories from "../components/Home/ItemCategories/ItemCategories";
let mapStateToProps = (state, item) => ({
    id: item.item.id,
    nameCategory: item.item.nameCategory,
    urlPhotoCategory: item.item.urlPhotoCategory,
});
let mapDispatchToProps = {
    onClickCategory: categoryChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCategories);
