import { FC } from "react";

import Navigation from "../Navigation";

import Logo from "../../components/Logo";

const Sidebar: FC = () => (
  <aside className="sidebar">
    <div className="sidebar__logo-wrapper">
      <Logo />
    </div>
    <Navigation />
  </aside>
);

export default Sidebar;
