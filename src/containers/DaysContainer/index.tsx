import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import List from "../../components/List";
import DragDrop from "../../components/DragDrop";

import { stocksListFetching, stocksNewList } from "./store/reducers";
import { stocksFetchingSelector, stocksDataSelector } from "./store/selectors";
import DaysSkeleton from "./components/Skeleton";
import DayCard from "./components/DayCard";
import { IDayData } from "./store/types";

const DaysContainer: FC = () => {
  const loading = useSelector(stocksFetchingSelector);
  const stocks = useSelector(stocksDataSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!stocks?.length) {
      dispatch(stocksListFetching());
    }
  }, [dispatch, stocks]);

  const handleNewList = (newList: IDayData[]) => {
    dispatch(stocksNewList(newList));
  };

  return (
    <section className="stocks-wrapper">
      <div style={{ width: "100%" }}>
        <List
          component={
            <>
              <DragDrop<IDayData>
                handleNewList={handleNewList}
                data={stocks || []}
                className="stocks"
                renderItem={item => (
                  <DayCard
                    key={item.type}
                    logoUrl={item.logoUrl}
                    changePercent={item.changePercent}
                    latestPrice={item.latestPrice}
                    type={item.type}
                  />
                )}
              />
            </>
          }
          data={stocks}
          preloader={<DaysSkeleton />}
          loading={loading}
        />
      </div>
      {/* <DaysSticky /> */}
    </section>
  );
};

export default DaysContainer;
