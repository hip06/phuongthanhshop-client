import { Button } from "../../components/Button";
import ApiCategory from "../../apis/category";
import { useEffect, useState } from "react";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { InputCustomWidth } from "../../components/InputCtWidth";
const ManageCategory = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  const onSubmit = async (data) => {
    console.log(value);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const tempCate = await ApiCategory.getAll();
      console.log(tempCate);
      setCategory(tempCate.response.rows);
    };
    fetchCategory();
  }, [isLoading]);

  const renderCateList = category.map((cate, i) => {
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
                await ApiCategory.delete({ id: cate.id });
                setIsLoading(!isLoading);
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
      <div className="bg-gray-300 rounded p-5 h-[525px]">
        <div className="h-1/5 ">
          <h2>Thêm gian hàng</h2>
          <div className="h-1/2 flex">
            <InputCustomWidth
              widthP="4/5"
              label="Thee danh muc san pham"
              value={value}
              setValue={setValue}
            ></InputCustomWidth>

            <Button
              text="Them"
              bgColor="#4ed14b"
              textColor="#fff"
              width="20%"
              onClick={() => {
                onSubmit(value);
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

          <h2>{`Tổng số gian hàng hiện có : ${category.length}`}</h2>
        </div>

        <div className="overflow-auto bg-white h-4/5">{renderCateList}</div>
      </div>
    </>
  );
};

export default ManageCategory;
