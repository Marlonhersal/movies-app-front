import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import ItemSpan from '../../components/ItemSpan/ItemSpan';
import S from './Items.module.scss'
import {useSelector, useDispatch} from "react-redux"
import {addItemLoaded} from "../../actions/index";

function Items(props) {
    const items = useSelector(state => state.items)
    const loaded = useSelector(state => state.itemLoaded)
    return (
        <div className={S.container}>
            <button onClick={()=>{
                console.log(loaded)
            }}>dasn</button>
            <h1>{props.element}</h1>
            <div>
                {items.map((item)=>{
                    return <Link to={`/admin/${props.element}/${item.id}`}><ItemSpan id={item.id} name= {item.name}  element={props.element}/></Link>
                })}
            </div>
        </div>
    );
}

export default Items;