import React from 'react';
import S from   './AdminTolsMovies.module.scss';
import NavBarAdmin from '../../../components/NavBarAdmin/NavBarAdmin';
import Items from '../../Items/Items';
import CrudMovies from '../../Crud/CrudMovies/CrudMovies';
import {useDispatch} from 'react-redux';
import {getItems, addItemLoaded} from "../../../actions/index";
import { useParams } from 'react-router-dom';


function AdminTols(props) {
    const token = localStorage.getItem('Token');
    return (
        <div>
            <NavBarAdmin/>
            <div className={S.container}>
                <Items className={S.c1} element={"movies"}  token={token}/>
                <CrudMovies className={S.c2} element={"movies"} token={token}/>
            </div>
        </div>
    );
}

export default AdminTols;