import { FC } from "react";
import { useSelector } from "react-redux";

import { userProductsInWeekSelector } from "features/User";

import DayCard from "./components/DayCard";

const DaysPage: FC = () => {
  const userProductsInWeek = useSelector(userProductsInWeekSelector);

  return (
    <section className="days-wrapper">
      <div className="days">
        {userProductsInWeek.map(item => (
          <DayCard
            energy={item.totalEnergyByDay}
            key={item.day}
            title={item.day.toUpperCase()}
            link={`/info/${item.day.toLowerCase()}`}
          />
        ))}
      </div>
      {/* <List
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
          /> */}
    </section>
  );
};

export default DaysPage;
