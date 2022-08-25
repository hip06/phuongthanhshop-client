import React from "react";
import { ButtonMedium, ButtonSmall } from "../../components/Button";
import image from "../../assets/temp.png";
import searchIcon from "../../assets/icon/search.svg";
import sortIcon from "../../assets/icon/sort.svg";
import { FiSearch } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import { useState } from "react";

const ManageProduct = () => {
  const [addAll, setAddAll] = useState(false);
  const tempData = [
    {
      image: "",
      name: "Hop com cua anh Hiep",
      category: "Gia dung",
      price: "150.000d",
    },
    {
      image: "",
      name: "Hop com cua anh Hiep",
      category: "Gia dung",
      price: "150.000d",
    },
    {
      image: "",
      name: "Hop com cua anh Hiep",
      category: "Gia dung",
      price: "150.000d",
    },
  ];

  if (addAll) {
    const checkboxs = [...document.querySelectorAll(".checkbox")];
    console.log(checkboxs);
    checkboxs.map((checkbox) => {
      checkbox.checked = "checked";
    });
  } else {
    const checkboxs = [...document.querySelectorAll(".checkbox")];
    console.log(checkboxs);
    checkboxs.map((checkbox) => {
      checkbox.checked = false;
    });
  }

  const renderProductList = tempData.map((product, i) => {
    return (
      <div
        key={i}
        className="flex items-center bg-white [&:not(:last-child)]:mb-[10px] w-full rounded-lg h-[102px] font-bold text-xl "
      >
        <div className="w-[10%] flex justify-center">
          <input
            type="checkbox"
            className="h-[17.5px] w-[17.5px] checkbox"
          ></input>
        </div>
        <div className=" w-[10%] flex justify-center">
          <img src={image} />
        </div>
        <div className="w-[25%] flex justify-center">
          <p>{product.name}</p>
        </div>
        <div className="w-[20%] flex justify-center">
          <p>{product.category}</p>
        </div>
        <div className="w-[15%] flex justify-center">
          <p>{product.price}</p>
        </div>
        <div className="flex w-[20%] justify-around ">
          <ButtonMedium content="Sửa" color="#4ED14B"></ButtonMedium>
          <ButtonMedium content="Xóa" color="#CF2B2B"></ButtonMedium>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-3xl">Quản lí sản phẩm</h1>

      <div className="flex w-full items-center bg-[#d9d9d9] rounded p-3 justify-between p-5">
        <div className="w-[25%] pl-[30px] flex items-center justify-around">
          <input
            type="checkbox"
            className="h-[17.5px] w-[17.5px]"
            onClick={() => {
              setAddAll(!addAll);
            }}
          ></input>
          <div className="font-bold text-xl">
            <p> Đã chọn: 0</p>
          </div>
          <ButtonSmall content="Action" color="#E92828"></ButtonSmall>
        </div>
        <div className="flex justify-around w-[50%] h-[40px]">
          <div className="flex items-center w-[50%] ">
            <input className="mr-3 h-[100%] w-[80%]"></input>
            <FiSearch className="cursor-pointer text-2xl" />
          </div>
          <div className="flex items-center w-[50%] ">
            <select name="cars" id="cars" className=" mr-3 w-[80%] h-[100%]">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>

            <BiSortAlt2 className="text-3xl" />
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
