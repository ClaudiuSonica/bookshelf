import { Link } from "react-router-dom";
import "./MenuItem.scss";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ img, label, alt, path }) => {
  return (
    <div className="menu_item">
      <Link to={path}>
        <img src={img} alt={alt} />
        <span>{label}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
