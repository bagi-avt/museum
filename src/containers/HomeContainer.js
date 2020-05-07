import { connect } from "react-redux";
import Home from "../components/Home/Home";

let mapStateToProps = (state) => {
    return {
        listCategories: state.exhibitsPage.listCategories,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
