
import { Link } from "react-router-dom";

function EnlaceFicha({to}) {

  return (
    <Link
      className="link-ficha"
      to={to}
    >
      <i class="fa-solid fa-circle-chevron-right"></i>
    </Link>
  )
}

export default EnlaceFicha