import { ILink } from "./../../types";

export type TNavigationItem = Omit<ILink, "isPrivate">;
