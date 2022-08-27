import React, { useEffect, useState } from "react";

import {
  InputCustomWidth,
  SelectCustomWidth,
  HashTagCustomWidth,
  TextCustomWidth,
  InputFileCustomWidth,
} from "../../components/InputCtWidth";
import Loading from "../../components/Loading";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectValue, setSelectValue] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [shortDes, setShortDes] = useState("");

  const exampleArray = ["Option 1", "option 2", "Option 3", "Option 4"];
  useEffect(() => {
    setOptions([...exampleArray]);
    setLoading(false);
    setSelectValue("option 1");
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-3xl">Nhập thông tin tại đây</h1>
          <div className="w-full items-center bg-[#d9d9d9] rounded p-3 justify-between p-5 h-[500px]">
            <div className="h-[20%]">
              <InputCustomWidth
                widthP={"full"}
                lable="Tên sản phẩm "
                placeholder="Tên sản phẩm..."
                PLarge={true}
                productName={productName}
                setProductName={setProductName}
              />
            </div>

            <div className="flex h-1/5 justify-between">
              <div className="flex w-[60%] ">
                <SelectCustomWidth
                  widthP="[30%]"
                  lable="Loại hàng"
                  options={options}
                  selectValue={selectValue}
                  setSelectValue={setSelectValue}
                />
                <InputCustomWidth
                  widthP="[30%]"
                  lable="Giá"
                  placeholder="Giá: VND"
                  PLarge={false}
                  price={price}
                  setPrice={setPrice}
                />
              </div>

              <HashTagCustomWidth
                widthP="[40%]"
                lable="Hash_Tag"
                placeholder="Tag..."
                tags={tags}
                setTags={setTags}
              />
            </div>
            <div className="flex">
              <div className=" w-[46%] mr-[24px]">
                <div className="h-1/2 ">
                  <InputCustomWidth
                    widthP={"full"}
                    lable="Miêu tả ngắn gọn"
                    placeholder="Miêu tả..."
                    PLarge={true}
                    shortDes={shortDes}
                    setShortDes={setShortDes}
                  />
                </div>
                <TextCustomWidth
                  widthP="full"
                  lable="Miêu tả chi tiết"
                  placeholder="Miêu tả chi tiết tại đây..."
                />
              </div>
              <div className=" w-[50%]">
                <InputFileCustomWidth lable="Ảnh 1" />

                <InputFileCustomWidth lable="Ảnh 2" />
                <InputFileCustomWidth lable="Ảnh 3" />
                <InputFileCustomWidth lable="Ảnh 4" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateProduct;
