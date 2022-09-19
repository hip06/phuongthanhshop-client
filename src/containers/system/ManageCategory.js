import { Button } from "../../components/Button";
import ApiCategory from "../../apis/category";
import { useEffect, useState } from "react";
import { InputCustomWidth } from "../../components/InputCtWidth";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import FormData from "form-data";
import { ModalEditCate, PopupDeleteCate } from "../../components/Modal";

const ManageCategory = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState({});

  const dispatch = useDispatch();
  const categories = useSelector((state) => {
    return state.app.categories
  });

  const onSubmit = async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("newCategory", newCategory);
    bodyFormData.append("color", color);
    bodyFormData.append("image", image);
    await ApiCategory.create(bodyFormData);
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    dispatch(actions.getCategory());
  }, [isLoading]);

  const renderCateList = categories.map((cate, i) => {

    return (
      <div key={cate.id} className="">
        <div className=" flex rounded w-full  bg-white items-center max-h-[90px] [&:not(:first-child)]:mt-2">
          <div className="w-[28%] p-10">
            <p className=" text-xl font-bold ">{cate.value}</p>
          </div>

          <div className="w-[28%]">
            <p className=" text-xl font-bold ">{cate.products}</p>
          </div>

          <div className="w-[28%]">
            <p className=" text-xl font-bold ">20/12/2022</p>
          </div>
          <div className="w-[30%] flex justify-around">
            <Button
              text="Sửa"
              bgColor="#4ed14b"
              textColor="#fff"
              width="40%"
              onClick={() => {
                setIsShowEdit(!isShowEdit);
                setId(cate.id);
              }}
            ></Button>
            <Button
              text="Xóa"
              bgColor="#cf2b2b"
              textColor="#fff"
              width="40%"
              height="2"
              onClick={() => {
                setIsDelete(!isDelete);
                setId(cate.id);
              }}
            ></Button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-2xl mb-2">ManageCategory</h1>
      <div className="bg-gray-300 rounded p-5 h-[525px]">
        <div className="">
          <h2>Thêm gian hàng</h2>
          <div className="">
            <div className="w-4/5">
              <InputCustomWidth
                widthP="full"
                value={newCategory}
                setValue={setNewCategory}
                placeholder="New Category"
              ></InputCustomWidth>
            </div>
            <div className="w-4/5">
              <InputCustomWidth
                widthP="full"
                value={color}
                setValue={setColor}
                placeholder="Color"
              ></InputCustomWidth>
            </div>

            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />

            <Button
              text="Them"
              bgColor="#4ed14b"
              textColor="#fff"
              width="20%"
              onClick={() => {
                onSubmit();
              }}
            ></Button>

            {/* <button
              type="button"
              onClick={() => {
                onSubmit(value);
              }}
              className="h-[50px] w-[50px]"
            >
              Submit
            </button> */}
          </div>

          <h2>{`Tổng số gian hàng hiện có : ${categories.length}`}</h2>
        </div>

        <div className="overflow-auto bg-white h-4/5">{renderCateList}</div>
      </div>
      {isShowEdit ? (
        <ModalEditCate setIsShowEdit={setIsShowEdit} id={id} />
      ) : (
        ""
      )}
      {isDelete ? (
        <PopupDeleteCate
          setIsDelete={setIsDelete}
          id={id}
          isDelete={isDelete}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ManageCategory;
