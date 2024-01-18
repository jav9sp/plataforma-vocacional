import React from "react";
import { Link } from "react-router-dom";


const ItemSubMenu = ({enlace, nombre}) => {
  return (
    <li className="item-submenu">
      <Link to={enlace} className="link-submenu">{nombre}</Link>
    </li>
  )
};

export default ItemSubMenu;