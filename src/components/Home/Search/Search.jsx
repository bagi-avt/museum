import React from "react";
import PropTypes from "prop-types";
import ListExhibit from "../ListExhibit/ListExhibit";

const Search = ({ state }) => {
    console.log(state);
    return (
        <div>
            sdgdfgkmdlfm
            <ListExhibit newListExhibits={state.exhibitsPage.newListExhibits} />
        </div>
    );
};
Search.propTypes = {
    state: PropTypes.object,
};
export default Search;
