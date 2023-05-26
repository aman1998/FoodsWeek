import { FC } from "react";
import { useParams } from "react-router-dom";

// import List from "../../../entities/List";
import AddProduct from "widgets/AddProduct";

// import SingleDaySkeleton from "./components/Skeleton";

const SingleDayContainer: FC = () => {
  const { id = "" } = useParams<{ id: string }>();

  return (
    <section className="day-container">
      <div className="day-container__header">
        <h1 className="day-container__title">{id.toUpperCase()}</h1>
        <AddProduct />
      </div>
      {/* <List
        component={<></>}
        loading={loading}
        preloader={<SingleDaySkeleton />}
        data={data}
        emptyText={<span>Empty</span>}
      /> */}
    </section>
  );
};

export default SingleDayContainer;
