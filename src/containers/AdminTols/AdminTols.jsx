import React from 'react';
import S from   './AdminTols.module.scss';
import NavBarAdmin from '../../components/NavBarAdmin/NavBarAdmin';
import Items from '../Items/Items';
import Crud from '../Crud/Crud';
import {useDispatch} from 'react-redux';
import {getItems, addItemLoaded} from "../../actions/index";
import { useParams } from 'react-router-dom';


function AdminTols(props) {
    const token = localStorage.getItem('Token');
    const despachador = useDispatch()
    let { element , id} =  useParams();
    if (element) despachador(getItems(element, token))
    if (id) despachador(addItemLoaded(element, id, token))

    return (
        <div>
            <NavBarAdmin/>
            <div className={S.container}>
                <Items className={S.c1} element={element}  />
                <Crud className={S.c2} element={element} id={id} token={token}/>
            </div>
        </div>
    );
}

export default AdminTols;