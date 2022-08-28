import { Button } from "../../components/Button";
import ApiCategory from "../../apis/category";
import { useEffect, useState } from "react";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const ManageCategory = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    console.log(1);
    const fetchCategory = async () => {
      const tempCate = await ApiCategory.getAll();
      console.log(tempCate);
      setCategory(tempCate.response.rows);
    };
    fetchCategory();
  }, []);
  const renderCateList = category.map((cate, i) => {
    console.log(123);
    return (
      <div key={cate.id} className="">
        <div className=" flex rounded w-full bg-white items-center h-[90px] [&:not(:first-child)]:mt-2">
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
                setIsShow(!isShow);
                setId(cate.id);
              }}
            ></Button>
            <Button
              text="Xóa"
              bgColor="#cf2b2b"
              textColor="#fff"
              width="40%"
              height="2"
              onClick={async () => {
                const res = await ApiCategory.delete({ code: cate.code });
                console.log(res);
              }}
            ></Button>
          </div>
        </div>
        {isShow & (id === cate.id) ? (
          <div className="">
            <div className="flex">
              <input
                type="text"
                aluev={cate.id === id ? name : ""}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onFocus={() => {
                  setId(cate.id);
                  setName("");
                }}
              />
              <Button
                text="XAC NHAN"
                bgColor="#cf2b2b"
                textColor="#fff"
                width="40%"
                height="2"
                onClick={async () => {
                  const res = await ApiCategory.put({
                    id: cate.id,
                    newCategory: name,
                  });
                  console.log(res);
                }}
              ></Button>
            </div>
          </div>
        ) : (
          ""
        )}
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
