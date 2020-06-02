import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemExhibit = ({ exhibit_id, name, url, selectedExhibit }) => {
    const urlPhoto = "http://192.168.0.21:5000/static/" + url + "/scene.png";
    const onCLick = () => {
        selectedExhibit(exhibit_id);
    };
    return (
        <div
            className="item-exhibit"
            style={{
                backgroundImage: "url(" + urlPhoto + ")",
            }}
        >
            <Link to={"/exhibit/" + exhibit_id} onClick={onCLick}>
                {name}
            </Link>
        </div>
    );
};
ItemExhibit.propTypes = {
    exhibit_id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
};
export default ItemExhibit;
