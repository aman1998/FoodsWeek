import { IListProps } from "./types";

const List = <T,>({
  loading,
  component,
  preloader = <div>loading</div>,
  emptyText = <div>empty</div>,
  data,
}: IListProps<T>): JSX.Element => {
  if (loading) return preloader;
  if (Array.isArray(data) && !data?.length) return emptyText;
  if (data?.length) return component;
  return <></>;
};

export default List;
