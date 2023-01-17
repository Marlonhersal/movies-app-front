import React from 'react';
import S from   './AdminTols.module.scss';
import NavBarAdmin from '../../../components/Admin/NavBarAdmin/NavBarAdmin';
import Lista from "../../../components/Admin/RelationsList/Relaciones";
import Items from '../Items/Items';
import CrudActors from '../Crud/CrudActors/CrudActors';
import {useDispatch} from 'react-redux';
import {getItems, addItemLoaded} from "../../../actions/index";
import { useParams } from 'react-router-dom';


function AdminTols(props) {
    const token = localStorage.getItem('Token');
    return (
        <div>
            <div className={S.container}>
                <Items className={S.c1} element={"actors"}  token={token}/>
                <CrudActors className={S.c2} element={"actors"} token={token}/>
                <Lista className={S.c2}  relationName="movies" title="Peliculas" edit={false} token={token} />
            </div>
        </div>
    );
}

export default AdminTols;