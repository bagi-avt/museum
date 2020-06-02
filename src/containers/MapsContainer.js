import { connect } from "react-redux";
import { filterExhibit } from "../redux/exhibits-reducer";
import Maps from "../components/Home/Maps/Maps";

let mapStateToProps = (state) => {
    return {
        filtredExhibits: state.exhibitsPage.filtredExhibits,
        defaultCenter: state.exhibitsPage.defaultCenter,
    };
};
let mapDispatchToProps = {
    filterExhibit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
