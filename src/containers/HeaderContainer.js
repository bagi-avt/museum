import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { inputSearchValueActionCreater } from "../redux/list-exhibits-reducer";
const mapStateToProps = (state) => {
    return {
        city: state.profilePage.city,
        username: state.profilePage.username,
        search: state.exhibitsPage.search,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        searchExhibit: (text) => {
            dispatch(inputSearchValueActionCreater(text));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
