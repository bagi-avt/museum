import { connect } from "react-redux";
import ListExhibit from "../components/ListExhibit/ListExhibit";

let mapStateToProps = (state) => ({
    filtredExhibits: state.exhibitsPage.filtredExhibits,
});
let mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListExhibit);
