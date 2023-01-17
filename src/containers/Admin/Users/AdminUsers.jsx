import React from "react";
import S from "./AdminTols.module.scss";
import Items from "../Items/Items";
import CrudUsers from "../Crud/CrudUsers/CrudUsers";

function AdminTols(props) {
  const token = localStorage.getItem("Token");
  return (
    <div>
      <div className={S.container}>
        <Items className={S.c1} element={"users"} token={token} />
        <CrudUsers className={S.c2} element={"users"} token={token} />
      </div>
    </div>
  );
}

export default AdminTols;
