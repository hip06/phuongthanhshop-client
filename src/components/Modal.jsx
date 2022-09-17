import { InputCustomWidth } from "./InputCtWidth";
import Button from "./Button";
import { useState } from "react";
import ApiCategory from "../apis/category";
import ApiProduct from "../apis/product";
import * as actions from "../../src/store/actions";
import { useDispatch } from "react-redux";

export const ModalEditCate = ({ setIsShowEdit, id }) => {
  const [newCategory, setNewCategory] = useState("");
  const [newColor, setNewColor] = useState("");
  const [image, setImage] = useState({});

  const dispatch = useDispatch();
  const Submit = async () => {
    await ApiCategory.put({ newCategory, newColor, image, id });
    dispatch(actions.getCategory());
  };

  return (
    <div
      className="fixed h-full w-full top-0 right-0 flex justify-center items-center bg-gray-500/[.09] drop-shadow-lg"
      onClick={(e) => {
        e.stopPropagation();
        setIsShowEdit(false);
      }}
    >
      <div
        className=" w-[500px] h-[500px] bg-white rounded p-10 flex flex-col  items-center z-10"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <b>SỬA THÔNG TIN GIAN HÀNG</b>
        <div className="h-[10%] w-full my-5 border rounded-lg">
          <InputCustomWidth
            value={newCategory}
            setValue={setNewCategory}
            label="Ten gian hang"
            widthP="full"
            placeholder="Ten gian hang..."
          ></InputCustomWidth>
        </div>
        <div className="h-[10%] w-full my-5 border rounded-lg">
          <InputCustomWidth
            value={newColor}
            setValue={setNewColor}
            label="Color"
            widthP="full"
            placeholder="Color..."
          ></InputCustomWidth>
        </div>
        <div className="h-[10%] w-full my-5">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];

              setImage(file);
            }}
          />
        </div>
        <Button
          text="Sửa"
          bgColor="#4ed14b"
          textColor="#fff"
          width="40%"
          height="2"
          onClick={Submit}
        ></Button>
      </div>
    </div>
  );
};

export const PopupDeleteCate = ({ setIsDelete, isDelete, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed h-full w-full top-0 right-0 flex justify-center items-center bg-gray-500/[.09] drop-shadow-lg"
      onClick={(e) => {
        setIsDelete(false);
        e.stopPropagation();
      }}
    >
      <div
        className=" w-[500px] bg-white rounded p-10 flex flex-col  items-center z-10"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <b>BẠN CHẮC MUỐN XÓA GIAN HÀNG NÀY CHỨ </b>
        <Button
          text="Sửa"
          bgColor="#4ed14b"
          textColor="#fff"
          width="40%"
          height="2"
          onClick={async () => {
            await ApiCategory.delete({ id });
            setIsDelete(!isDelete);
            dispatch(actions.getCategory());
          }}
        ></Button>
      </div>
    </div>
  );
};

export const PopupDeleteProduct = ({
  setIsDelete,
  setIsLoading,
  isLoading,
  isDelete,
  id,
  cate,
  selectValue,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed h-full w-full top-0 right-0 flex justify-center items-center bg-gray-500/[.09] drop-shadow-lg"
      onClick={(e) => {
        setIsDelete(false);
        e.stopPropagation();
      }}
    >
      <div
        className=" w-[500px] bg-white rounded p-10 flex flex-col  items-center z-10"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <b>BẠN CHẮC MUỐN XÓA SẢN PHẨM NÀY CHỨ </b>
        <Button
          text="XÓA"
          bgColor="#4ed14b"
          textColor="#fff"
          width="40%"
          height="2"
          onClick={async () => {
            await ApiProduct.delete(id);
            setIsDelete(!isDelete);
            setIsLoading(!isLoading);

            cate(selectValue);
          }}
        ></Button>
      </div>
    </div>
  );
};
