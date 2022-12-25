import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Style from   './AdminTols.module.scss'

function AdminTols(props) {
    return (
        <div>
            <NavBar/>
            <h1 className={Style.development}>En desarrollo</h1>
        </div>
    );
}

export default AdminTols;