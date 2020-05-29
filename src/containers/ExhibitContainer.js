import { connect } from "react-redux";
//import history from "../history";
import Exhibit from "../components/Exhibit/Exhibit";

let mapStateToProps = (state) => {
    return { exhibit: state.exhibitsPage.selectedExhibit[0] };
};
let mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Exhibit);
