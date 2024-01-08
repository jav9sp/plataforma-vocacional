import React from "react";
import '../estilos/ItemSubMenu.css'

const ItemSubMenu = ({enlace, nombre}) => {
  return (
    <li className="item-submenu">
      <a href={enlace} className="link-submenu">{nombre}</a>
    </li>
  )
};

export default ItemSubMenu;