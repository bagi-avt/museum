import { connect } from "react-redux";
import ListExhibit from "../components/ListExhibit/ListExhibit";

let mapStateToProps = (state) => {
    return { filtredExhibits: state.exhibitsPage.filtredExhibits };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListExhibit);
