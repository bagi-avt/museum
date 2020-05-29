import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { inputSearchValue } from "../redux/list-exhibits-reducer";
const mapStateToProps = (state) => {
    return {
        city: state.profilePage.city,
        username: state.profilePage.username,
        search: state.exhibitsPage.search,
    };
};
const mapDispatchToProps = {
    inputSearchValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
