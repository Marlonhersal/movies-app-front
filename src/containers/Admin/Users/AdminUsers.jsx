import React from 'react';
import S from   './AdminTols.module.scss';
import NavBarAdmin from '../../../components/NavBarAdmin/NavBarAdmin';
import Items from '../../Items/Items';
import CrudUsers from '../../Crud/CrudUsers/CrudUsers';
import {useDispatch} from 'react-redux';
import {getItems, addItemLoaded} from "../../../actions/index";
import { useParams } from 'react-router-dom';


function AdminTols(props) {
    const token = localStorage.getItem('Token');


    return (
        <div>
            <NavBarAdmin/>
            <div className={S.container}>
                <Items className={S.c1} element={"users"}  token={token}/>
                <CrudUsers className={S.c2} element={"users"} token={token}/>
            </div>
        </div>
    );
}

export default AdminTols;