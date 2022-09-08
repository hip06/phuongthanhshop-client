import React, { useEffect, useState } from "react";
import { ProductCardCtHeight } from "../../components/ProductCard";
import {
  InputCustomWidth,
  SelectCustomWidth,
  HashTagCustomWidth,
  TextCustomWidth,
  InputFileCustomWidth,
} from "../../components/InputCtWidth";
import { GroupImageCtWidth } from "../../components/GroupImageCtWidth";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import ApiGetProduct from "../../apis/product";

const EditProduct = () => {
  const [productName, setProductName] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectValue, setSelectValue] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [shortDes, setShortDes] = useState("");
  const [imageMain, setImageMain] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const exampleArray = ["Option 1", "option 2", "Option 3", "Option 4"];
  useEffect(() => {
    //handleAPI here and combine to setOptions#
    setOptions([...exampleArray]);
    setLoading(false);
    setSelectValue("option 1");
  }, []);
  // if (imageMain !== "") imageMain?.preview = URL.createObjectURL(imageMain);
  // if (image1 !== "") image1.preview = URL.createObjectURL(image1);
  // if (image2 !== "") image2.preview = URL.createObjectURL(image2);
  // if (image3 !== "") image3.preview = URL.createObjectURL(image3);
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
                value={productName}
                setValue={setProductName}
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
                  value={price}
                  setValue={setPrice}
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
                    value={shortDes}
                    setValue={setShortDes}
                  />
                </div>
                <TextCustomWidth
                  widthP="full"
                  lable="Miêu tả chi tiết"
                  placeholder="Miêu tả chi tiết tại đây..."
                />
              </div>
              <div className=" w-[50%]">
                <input
                  type="file"
                  name="imageMain"
                  onChange={(e) => {
                    console.log(e.target);
                  }}
                />
                <InputFileCustomWidth
                  lable="Ảnh 1"
                  widthP="[100%]"
                  valueImg={image1}
                  setValueImg={setImage1}
                />
                <InputFileCustomWidth
                  lable="Ảnh 2"
                  widthP="[100%]"
                  valueImg={image2}
                  setValueImg={setImage2}
                />
                <InputFileCustomWidth
                  lable="Ảnh 3"
                  widthP="[100%]"
                  valueImg={image3}
                  setValueImg={setImage3}
                />
              </div>
              <Button
                text="Submit"
                onClick={() => {
                  ApiGetProduct.create({
                    name: productName,
                    costPerUnit: price,
                    mainDescription: shortDes,
                    mainImage: imageMain,
                    image1,
                    image2,
                    image3,
                  });
                }}
              ></Button>
            </div>
          </div>
          <h1 className="text-3xl">Xem trước tại đây</h1>
          <div className="w-full items-center bg-[#d9d9d9] rounded p-3 justify-between p-5">
            <div className="flex">
              <div className="mr-[30px]">
                <ProductCardCtHeight
                  image={imageMain?.preview}
                  name={productName}
                  description={shortDes}
                  costPerUnit={price}
                  color={"#4ed14b"}
                />
              </div>
              <div>
                <p>Xem trước chi tiết sản phẩm trên mobile tại đây</p>
                <div className="w-[500px] ">
                  <div className="w-[375px] ml-[25%]">
                    <GroupImageCtWidth
                      widthP="full"
                      mainImage={imageMain?.preview}
                      image1={image1.preview}
                      image2={image2.preview}
                      image3={image3.preview}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[12px]">
              <p>Xem trước chi tiết sản phẩm trên desktop tại đây</p>

              <GroupImageCtWidth
                widthP="400px"
                mainImage={imageMain?.preview}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditProduct;
