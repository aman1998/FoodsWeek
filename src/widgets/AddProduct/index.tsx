import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddProductForm, handleProductAddModalisOpen, productAddModalisOpenSelector } from "features/User";

import Button from "shared/UI/Button";
import Modal from "shared/UI/Modal";

import { IAddProductProps } from "./types";

const AddProduct: FC<IAddProductProps> = ({ day }) => {
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
    <>
      <Button onClick={openModal}>Add Product</Button>

      <Modal isOpen={isOpenModal} onClose={() => dispatch(handleProductAddModalisOpen(false))}>
        <AddProductForm day={day} />
      </Modal>
    </>
  );
};

export default AddProduct;
