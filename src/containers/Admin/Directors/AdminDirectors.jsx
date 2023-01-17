import React from 'react';
import S from   './AdminTols.module.scss';
import NavBarAdmin from '../../../components/Admin/NavBarAdmin/NavBarAdmin';
import Items from '../Items/Items';
import Lista from "../../../components/Admin/RelationsList/Relaciones";
import CrudDirectors from '../Crud/CrudDirectors/CrudDirectors';
import {useDispatch} from 'react-redux';
import {getItems, addItemLoaded} from "../../../actions/index";
import { useParams } from 'react-router-dom';


function AdminTols(props) {
    const token = localStorage.getItem('Token');
    return (
        <div>
            <div className={S.container}>
                <Items className={S.c1} element={"directors"}  token={token}/>
                <CrudDirectors className={S.c2} element={"directors"} token={token}/>
                <Lista className={S.c2} relationName="movie" title="Actores" edit={false} token={token} />
            </div>
        </div>
    );
}

export default AdminTols;