import { connect } from "react-redux";
import ItemExhibit from "../components/ListExhibit/ItemExhibit";
import { selectedExhibit } from "../redux/exhibits-reducer";
let mapStateToProps = (state, item) => ({
    exhibit_id: item.item._id,
    name: item.item.properties.name,
    url: item.item.url,
});
let mapDispatchToProps = { selectedExhibit };

export default connect(mapStateToProps, mapDispatchToProps)(ItemExhibit);
