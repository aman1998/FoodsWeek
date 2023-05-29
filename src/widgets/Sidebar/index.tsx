import { FC } from "react";

import Navigation from "../Navigation";
import Logo from "../../shared/UI/Logo";

const Sidebar: FC = () => (
  <aside className="sidebar">
    <div className="sidebar__logo-wrapper">
      <Logo link="/days" />
    </div>
    <Navigation />
  </aside>
);

export default Sidebar;
