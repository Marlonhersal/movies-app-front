import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import ItemSpan from '../../components/ItemSpan/ItemSpan';
import S from './Items.module.scss'
import {useSelector, useDispatch} from "react-redux"
import {addItemLoaded, getItems} from "../../actions/index";

function Items(props) {
    const despachador = useDispatch()
    const listItems = useSelector(state => state.items)
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleItemClick = item => {
        setSelectedItem(item);
    };

    useEffect(()=>{
        despachador(getItems(props.element, props.token))
    }, [])

    return (
        <div className={S.container}>
            <input type="button" value="MOstrar" onClick={()=> console.log(listItems)}/>
            <h1 className={S.title}>{props.element}</h1>
            <div>
                {listItems.map((item)=>{
                    return <div key={item.id}
                    className={item === selectedItem ? S.active : ''} 
                    onClick={(e)=> {
                        despachador(addItemLoaded(props.element, item.id, props.token))
                        handleItemClick(item)
                    }}>
                        <ItemSpan id={item.id} name={item.name}/> 
                    </div> 
                })}
            </div>
        </div>
    );
}

export default Items;