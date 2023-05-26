import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// import List from "../../../entities/List";
import { AddProductForm, handleProductAddModalisOpen, productAddModalisOpenSelector } from "features/Profile";

import Button from "shared/UI/Button";
import Modal from "shared/UI/Modal";

// import SingleDaySkeleton from "./components/Skeleton";

const SingleDayContainer: FC = () => {
  const { id = "" } = useParams<{ id: string }>();

  const isOpenModal = useSelector(productAddModalisOpenSelector);

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(handleProductAddModalisOpen(true));
  };

  useEffect(
    () => () => {
      dispatch(handleProductAddModalisOpen(false));
    },
    [dispatch]
  );

  return (
    <section className="day-container">
      <div className="day-container__header">
        <h1 className="day-container__title">{id.toUpperCase()}</h1>
        <Button onClick={openModal}>Add Product</Button>
      </div>
      {/* <List
        component={<></>}
        loading={loading}
        preloader={<SingleDaySkeleton />}
        data={data}
        emptyText={<span>Empty</span>}
      /> */}
      <Modal isOpen={isOpenModal} onClose={() => dispatch(handleProductAddModalisOpen(false))}>
        <AddProductForm />
      </Modal>
    </section>
  );
};

export default SingleDayContainer;
