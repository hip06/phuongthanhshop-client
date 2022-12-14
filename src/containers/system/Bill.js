import React from "react";
import { Button } from "../../components/Button";
import image from "../../assets/temp.png";
import searchIcon from "../../assets/icon/search.svg";
import sortIcon from "../../assets/icon/sort.svg";
import { FiSearch } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import { useState, useEffect } from "react";
import ApiBill from "../../apis/bill";
import { BsCheckLg } from "react-icons/bs";
import {
  InputCustomWidth,
  SelectCustomWidth,
} from "../../components/InputCtWidth";

const Bill = () => {
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
      const res = await ApiBill.getAll();
      const bills = res.bill;
      console.log(bills);
      setProducts(bills);
    };
    fetchProducts();
  }, []);
  if (addAll) {
    const checkboxs = [...document.querySelectorAll(".checkbox")];
    checkboxs?.map((checkbox) => {
      checkbox.checked = "checked";
    });
  } else {
    const checkboxs = [...document.querySelectorAll(".checkbox")];
    checkboxs?.map((checkbox) => {
      checkbox.checked = false;
    });
  }

  const renderProductList = products?.map((product, i) => {
    return (
      <div
        key={product.id}
        className="flex items-center bg-white [&:not(:last-child)]:mb-[10px] w-full rounded-lg h-[102px]  text-xl "
      >
        <div className="w-[10%] flex justify-center">{i + 1}</div>
        <div className=" w-[10%] flex justify-center">
          <img src={image} />
        </div>
        <div className="w-[25%] flex justify-center">
          <p>{product.name}</p>
        </div>
        <div className="w-[20%] flex justify-center">
          <p>{product?.category?.value}</p>
        </div>
        <div className="w-[15%] flex justify-center">
          <p>{product.costPerUnit}</p>
        </div>
        <div className="flex w-[20%] justify-around "></div>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-3xl">H??a ????n</h1>

      <div className="flex items-center bg-[#d9d9d9] rounded p-3 justify-between p-5">
        <div className="flex justify-between w-[80%] h-[40px]">
          <div className="flex items-center w-[50%] ">
            <InputCustomWidth widthP="full" />
          </div>
          <div className="w-[10%] h-full flex items-center">
            <FiSearch className="ml-2 cursor-pointer text-2xl hover:text-gray-500" />
          </div>
          <div className="w-[40%] ">
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
          <div className="w-[5%] flex justify-center font-bold text-2xl">
            Id
          </div>
          <div className="w-[20%] flex justify-center font-bold text-xl">
            Email
          </div>
          <div className="w-[20%] flex justify-center font-bold text-xl">
            ?????a ch???
          </div>
          <div className="w-[15%] flex justify-center font-bold text-xl">
            S??t
          </div>
          <div className="w-[20%] flex justify-center font-bold text-xl">
            T???ng h??a ????n
          </div>
          <div className="w-[20%] flex justify-center font-bold text-xl">
            Trang thai
          </div>
        </div>
        {renderProductList}
      </div>
    </>
  );
};

export default Bill;
