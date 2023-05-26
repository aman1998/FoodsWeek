import { FC } from "react";

import { days } from "../../widgets/Navigation/constants";

import DayCard from "./components/DayCard";

const DaysContainer: FC = () => (
  <section className="days-wrapper">
    <div className="days">
      {days.map(item => (
        <DayCard key={item} title={item} link={`/info/${item.toLowerCase()}`} />
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

export default DaysContainer;
