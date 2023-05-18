import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => (
  <Link to="/" className="logo">
    FOODWEEK
  </Link>
);

export default Logo;
