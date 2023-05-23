import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import List from "../../components/List";
import Button from "../../UI/Button";
import Modal from "../../components/Modal";

import { singleDayFetching, handleProductAddModalisOpen } from "./store/reducers";
import { singleDayFetchingSelector, singleDaySuccessSelector, productAddModalisOpenSelector } from "./store/selectors";
import SingleDaySkeleton from "./components/Skeleton";
import AddProduct from "./components/AddProduct";

const SingleDayContainer: FC = () => {
  const { id = "" } = useParams<{ id: string }>();

  const loading = useSelector(singleDayFetchingSelector(id));
  const isOpenModal = useSelector(productAddModalisOpenSelector);
  const data = useSelector(singleDaySuccessSelector(id));

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(handleProductAddModalisOpen(true));
  };

  useEffect(() => {
    if (id && !data) {
      dispatch(singleDayFetching(id));
    }
  }, [dispatch, id, data]);

  return (
    <section className="day-container">
      <div className="day-container__header">
        <h1 className="day-container__title">{id}</h1>
        <Button onClick={openModal}>Add Product</Button>
      </div>
      <List
        component={<></>}
        loading={loading}
        preloader={<SingleDaySkeleton />}
        data={data}
        emptyText={<span>Empty</span>}
      />
      <Modal isOpen={isOpenModal} onClose={() => dispatch(handleProductAddModalisOpen(false))}>
        <AddProduct />
      </Modal>
    </section>
  );
};

export default SingleDayContainer;
