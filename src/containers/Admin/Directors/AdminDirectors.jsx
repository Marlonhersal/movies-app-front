import React from 'react';
import S from   './AdminTolsDIrectors.module.scss';
import NavBarAdmin from '../../../components/NavBarAdmin/NavBarAdmin';
import Items from '../../Items/Items';
import CrudDirectors from '../../Crud/CrudDirectors/CrudDirectors';
import {useDispatch} from 'react-redux';
import {getItems, addItemLoaded} from "../../../actions/index";
import { useParams } from 'react-router-dom';


function AdminTols(props) {
    const token = localStorage.getItem('Token');
    return (
        <div>
            <NavBarAdmin/>
            <div className={S.container}>
                <Items className={S.c1} element={"directors"}  token={token}/>
                <CrudDirectors className={S.c2} element={"directors"} token={token}/>
            </div>
        </div>
    );
}

export default AdminTols;