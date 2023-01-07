import React from 'react';
import { useDispatch} from "react-redux"
import {addItemLoaded} from "../../actions/index";

import S from "./ItemSpan.module.scss"

function ItemSpan(props) {
    return (
        <div className={S.target}>
            <span className={S.id}>{props.id} </span>
            <span className={S.name}>{props.name}</span>
        </div>
    );
}

export default ItemSpan;