import { FC } from "react";

import Logo from "../Logo";
import Navigation from "../Navigation";

const Sidebar: FC = () => (
  <aside className="sidebar">
    <div className="sidebar__logo-wrapper">
      <Logo />
    </div>
    <Navigation />
  </aside>
);

export default Sidebar;
