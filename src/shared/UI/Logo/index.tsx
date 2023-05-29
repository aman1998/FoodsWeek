/* eslint-disable max-len */
import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC<{ link: string }> = ({ link }) => (
  <Link to={link} className="logo">
    FoodsWeek
  </Link>
);

export default Logo;
