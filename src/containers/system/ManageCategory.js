import { ButtonMedium } from "../../components/Button";
import ApiGetCategory from "../../apis/category";
import { useEffect, useState } from "react";

const ManageCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    console.log(1);
    const fetchCategory = async () => {
      const tempCate = await ApiGetCategory.getAll();
      console.log(tempCate.response);
      setCategory(tempCate.response);
    };
    fetchCategory();
  }, []);

  const renderCateList = category.map((cate, i) => {
    console.log(123);
    return (
      <div
        key={i}
        className=" flex rounded w-full bg-white items-center h-[90px] [&:not(:first-child)]:mt-2"
      >
        <div className="w-[28%] p-10">
          <p className=" text-xl font-bold ">{cate.value}</p>
        </div>

        <div className="w-[28%]">
          <p className=" text-xl font-bold ">{cate.products}</p>
        </div>

        <div className="w-[28%]">
          <p className=" text-xl font-bold ">20/12/2022</p>
        </div>
        <ButtonMedium content="Sửa" color="#4ED14B"></ButtonMedium>
        <ButtonMedium content="Xóa" color="#CF2B2B"></ButtonMedium>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-2xl mb-2">ManageCategory</h1>
      <div className="bg-gray-300 rounded p-5">
        <h2>{`Tổng số gian hàng hiện có : ${category.length}`}</h2>
        {renderCateList}
      </div>
    </>
  );
};

export default ManageCategory;
