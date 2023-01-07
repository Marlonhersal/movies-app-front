import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ItemSpan from "../../components/ItemSpan/ItemSpan";
import S from "./Items.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addItemLoaded, getItems } from "../../actions/index";

function Items(props) {
  const despachador = useDispatch();
  const listItems = useSelector((state) => state.items);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    despachador(getItems(props.element, props.token));
  }, []);

  return (
    <div className={S.main_container}>
      <h1 className={S.title}>{props.element}</h1>
      <div className={S.navigation_bar}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <ul className={S.list_items}>
          {listItems.map((item) => {
            return (
              <li
                key={item.id}
                className={`${S.target} ${
                  item === selectedItem ? S.active : ""
                }`}
                onClick={(e) => {
                  despachador(
                    addItemLoaded(props.element, item.id, props.token)
                  );
                  handleItemClick(item);
                }}
              >
                {`${item.id} ${item.name}`}
              </li>
            );
          })}
        </ul>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </div>
    </div>
  );
}

export default Items;
