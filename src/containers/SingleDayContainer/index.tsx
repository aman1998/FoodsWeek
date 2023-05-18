import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import List from "../../components/List";

import { singleDayFetching } from "./store/reducers";
import { singleDayFetchingSelector, singleDaySuccessSelector } from "./store/selectors";
import SingleDaySkeleton from "./components/Skeleton";

const SingleDayContainer: FC = () => {
  const { id = "" } = useParams<{ id: string }>();

  const loading = useSelector(singleDayFetchingSelector(id));
  const data = useSelector(singleDaySuccessSelector(id));

  const dispatch = useDispatch();

  useEffect(() => {
    if (id && !data) {
      dispatch(singleDayFetching(id));
    }
  }, [dispatch, id, data]);

  return (
    <section className="day-container">
      <h1 className="day-container__title">{id}-STOCK</h1>
      <List
        component={<></>}
        loading={loading}
        preloader={<SingleDaySkeleton />}
        data={data}
        emptyText={<span>Empty</span>}
      />
    </section>
  );
};

export default SingleDayContainer;
