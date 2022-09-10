import React from "react";
import { Button } from "../../components/Button";
import image from "../../assets/temp.png";
import searchIcon from "../../assets/icon/search.svg";
import sortIcon from "../../assets/icon/sort.svg";
import { FiSearch } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import { useState, useEffect } from "react";
import ApiGetProduct from "../../apis/product";
import { BsCheckLg } from "react-icons/bs";
import {
  InputCustomWidth,
  SelectCustomWidth,
} from "../../components/InputCtWidth";

const ManageProduct = () => {
  const [addAll, setAddAll] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [options, setOptions] = useState([]);
  const exampleArray = ["Option 1", "option 2", "Option 3", "Option 4"];
  useEffect(() => {
    setOptions([...exampleArray]);

    setSelectValue("option 1");
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await ApiGetProduct.getAll();
      console.log(res);
      const data = Object.values(res.data["0"]);
      setProducts(data[0]);
    };
    fetchProducts();
  }, []);
  if (addAll) {
    const checkboxs = [...document.querySelectorAll(".checkbox")];
    checkboxs.map((checkbox) => {
      checkbox.checked = "checked";
    });
  } else {
    const checkboxs = [...document.querySelectorAll(".checkbox")];
    checkboxs.map((checkbox) => {
      checkbox.checked = false;
    });
  }
  products.map((product) => {
    return (
      <div>
        <p>{product.id}</p>
      </div>
    );
  });
  const renderProductList = products.map((product, i) => {
    return (
      <div
        key={i}
        className="flex items-center bg-white [&:not(:last-child)]:mb-[10px] w-full rounded-lg h-[102px]  text-xl "
      >
        <div className="w-[10%] flex justify-center">
          <input
            type="checkbox"
            className="h-[17.5px] w-[17.5px] checkbox"
          ></input>
        </div>
        <div className=" w-[10%] flex justify-center h-4/5">
          <img src={image} alt="" className="h-full"></img>
        </div>
        <div className="w-[25%] flex justify-center ">
          <div className="w-full">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis">
              {product.name}
            </p>
          </div>
        </div>
        <div className="w-[20%] flex justify-center">
          <p>{product?.category?.value}</p>
        </div>
        <div className="w-[15%] flex justify-center">
          <p>{product?.costPerUnit}</p>
        </div>
        <div className="flex w-[20%] justify-around ">
          <Button
            text="Sửa"
            bgColor="#4ed14b"
            textColor="#fff"
            width="40%"
          ></Button>
          <Button
            text="Xóa"
            bgColor="#cf2b2b"
            textColor="#fff"
            width="40%"
            height="2"
          ></Button>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-3xl">Quản lí sản phẩm</h1>

      <div className="flex items-center bg-[#d9d9d9] rounded p-3 justify-between p-5">
        <div className="w-[30%] pl-[30px] flex items-center justify-around text-xl ">
          <input
            type="checkbox"
            className="h-[17.5px] w-[17.5px]"
            onClick={() => {
              setAddAll(!addAll);
            }}
          ></input>
          <div className="font-bold ">
            <p> Đã chọn: 0</p>
          </div>
          <Button
            text="Xóa"
            bgColor="#cf2b2b"
            textColor="#fff"
            width="40%"
            height="2"
          ></Button>
        </div>
        <div className="flex justify-between w-[50%] h-[40px]">
          <div className="flex items-center w-[50%] ">
            <InputCustomWidth />

            <FiSearch className="ml-2 cursor-pointer text-2xl hover:text-gray-500" />
          </div>
          <div className="flex items-center w-[40%] ">
            <SelectCustomWidth
              widthP="full"
              options={options}
              selectValue={selectValue}
              setSelectValue={setSelectValue}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#d9d9d9] p-5 rounded-[10px] mt-5">
        <div className="flex pb-5">
          <div className="w-[5%] flex justify-center font-bold text-2xl"></div>
          <div className="w-[20%] flex justify-center font-bold text-xl">
            Hình ảnh sản phẩm
          </div>
          <div className="w-[15%] flex justify-center font-bold text-xl">
            Tên sản phẩm
          </div>
          <div className="w-[30%] flex justify-center font-bold text-xl">
            Loại hàng
          </div>
          <div className="w-[5%] flex justify-center font-bold text-xl">
            Giá
          </div>
        </div>
        {renderProductList}
      </div>
    </>
  );
};

export default ManageProduct;
