import React from "react";
import '../estilos/ItemMenu.css'

const ItemMenu = ({enlace, nombre}) => {
  return (
    <li className="item-menu">
      <a href={enlace} className="link-menu">{nombre}</a>
    </li>
  )
};

export default ItemMenu;