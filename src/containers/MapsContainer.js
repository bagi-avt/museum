import { connect } from "react-redux";
import { filterExhibitActionCreater } from "../redux/list-exhibits-reducer";
import Maps from "../components/Home/Maps/Maps";

let mapStateToProps = (state) => {
    return {
        filtredExhibits: state.exhibitsPage.filtredExhibits,
        defaultCenter: state.exhibitsPage.defaultCenter,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        filterExhibit: (bounds) => {
            dispatch(filterExhibitActionCreater(bounds));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
