import { Button } from "../../components/Button";
import ApiCategory from "../../apis/category";
import { useEffect, useState } from "react";

const ManageCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const tempCate = await ApiCategory.getAll();
      setCategory(tempCate.response.rows);
    };
    fetchCategory();
  }, []);
  const renderCateList = category.map((cate, i) => {
    console.log(123);
    return (
      <div
        key={cate.id}
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
        <div className="w-[30%] flex justify-around">
          <Button
            text="Sửa"
            bgColor="#4ed14b"
            textColor="#fff"
            width="2/5"
          ></Button>
          <Button
            text="Xóa"
            bgColor="#cf2b2b"
            textColor="#fff"
            width="2/5"
            height="2"
          ></Button>
        </div>
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
