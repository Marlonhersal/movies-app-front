import React from 'react';
import { useDispatch} from "react-redux"
import {addItemLoaded} from "../../actions/index";

function ItemSpan(props) {
    return (
        <div >
            <span>{props.id}</span>
            <span>{props.name}</span>
        </div>
    );
}

export default ItemSpan;