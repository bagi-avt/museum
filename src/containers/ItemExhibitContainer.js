import { connect } from "react-redux";
import ItemExhibit from "../components/ListExhibit/ItemExhibit";
import { selectedExhibit } from "../redux/list-exhibits-reducer";
let mapStateToProps = (state, item) => {
    return {
        exhibit_id: item.item.properties.exhibit_id,
        name: item.item.properties.name,
        url: item.item.url,
    };
};
let mapDispatchToProps = { selectedExhibit };

export default connect(mapStateToProps, mapDispatchToProps)(ItemExhibit);
