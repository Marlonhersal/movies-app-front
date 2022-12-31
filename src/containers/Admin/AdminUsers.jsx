import React from 'react';
import S from   './AdminTols.module.scss';
import NavBarAdmin from '../../components/NavBarAdmin/NavBarAdmin';
import Items from '../Items/Items';
import Post from '../Post/Post';
import {useDispatch} from 'react-redux';
import {getItems, addItemLoaded} from "../../actions/index";
import { useParams } from 'react-router-dom';


function AdminTols(props) {
    const token = localStorage.getItem('Token');
    const despachador = useDispatch()
    let { element , id} =  useParams();
    despachador(getItems(element, token))
    despachador(addItemLoaded(element, id, token))
    return (
        <div>
            <NavBarAdmin/>
            <div className={S.container}>
                <Items className={S.c1} element={element} />
                <Post className={S.c2}/>
            </div>
        </div>
    );
}

export default AdminTols;