import React, { useEffect, useState } from "react";
import {
  InputCustomWidth,
  SelectCustomWidth,
  HashTagCustomWidth,
  TextCustomWidth,
  InputVariant,
} from "../../components/InputCtWidth";
import Button from "../../components/Button";
import FormData from "form-data";
import { useSelector } from "react-redux";
import ApiProduct from "../../apis/product";

const EditProduct = () => {
  const [productName, setProductName] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [shortDes, setShortDes] = useState("");
  const [image, setImage] = useState({
    imageMain: {},
    image1: {},
    image2: {},
    image3: {},
  });
  const [variant, setVariant] = useState([]);
  const [variantValue, setVariantValue] = useState({ name: '', value: [] });
  const [variantChild, setVariantChild] = useState({ type: '', price: '' })


  const { categories } = useSelector((state) => state.app);

  const handleSubmit = async () => {
    console.log(variant);
    const ca = JSON.stringify(variant);
    console.log(JSON.parse(ca));
    const bodyFormData = new FormData();
    bodyFormData.append("mainImage", image.imageMain);
    bodyFormData.append("image1", image.image1);
    bodyFormData.append("image2", image.image2);
    bodyFormData.append("image3", image.image3);
    bodyFormData.append("name", productName);
    bodyFormData.append("costPerUnit", price);
    bodyFormData.append("description", shortDes);
    bodyFormData.append("categoryCode", selectValue);
    bodyFormData.append("variants", JSON.stringify(variant));
    ApiProduct.create(bodyFormData);
  };
  useEffect(() => {
    categories.length > 0 && setSelectValue(categories[0].code);
  }, [categories]);
  // if (imageMain !== "") imageMain?.preview = URL.createObjectURL(imageMain);
  // if (image1 !== "") image1.preview = URL.createObjectURL(image1);
  // if (image2 !== "") image2.preview = URL.createObjectURL(image2);
  // if (image3 !== "") image3.preview = URL.createObjectURL(image3);
  // useEffect(() => {}, [imageMain]);
  return (
    <>

      <div className="w-full items-center bg-[#d9d9d9] rounded justify-between p-5 h-[600px]">
        <h1 className="text-3xl text-center">Nhập thông tin tại đây</h1>
        <div className="h-[15%]">
          <InputCustomWidth
            widthP={"full"}
            lable="Tên sản phẩm "
            placeholder="Tên sản phẩm..."
            PLarge={true}
            value={productName}
            setValue={setProductName}
          />
        </div>

        <div className="flex justify-between">
          <div className="flex w-[70%] h-full">
            <SelectCustomWidth
              widthP="[30%]"
              lable="Loại hàng"
              options={categories}
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
            widthP="[30%]"
            lable="Hash_Tag"
            placeholder="Tag..."
            tags={tags}
            setTags={setTags}
          />
        </div>
        <div className="flex ">
          <div className=" w-1/2 pr-3">
            <div className="">
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
            {/* input image */}
            <div className=" w-[50%] mt-3">
              <input
                type="file"
                name="imageMain"
                onChange={(e) => {
                  setImage((prev) => ({
                    ...prev,
                    imageMain: e.target.files[0],
                  }));
                }}
              />
              <input
                type="file"
                name="image1"
                onChange={(e) => {
                  setImage((prev) => ({
                    ...prev,
                    image1: e.target.files[0],
                  }));
                }}
              />
              <input
                type="file"
                name="image2"
                onChange={(e) => {
                  setImage((prev) => ({
                    ...prev,
                    image2: e.target.files[0],
                  }));
                }}
              />
              <input
                type="file"
                name="image3"
                onChange={(e) => {
                  setImage((prev) => ({
                    ...prev,
                    image3: e.target.files[0],
                  }));
                }}
              />
              {/* <InputFileCustomWidth
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
                />*/}
            </div>
          </div>
          <div className="w-1/2 pl-3">
            <InputVariant setVariantChild={setVariantChild} setVariant={setVariant} variant={variant} variantChild={variantChild} variantValue={variantValue} setVariantValue={setVariantValue} />
          </div>

          <Button text="Submit" onClick={handleSubmit}></Button>
        </div>
      </div>
      {/* <h1 className="text-3xl">Xem trước tại đây</h1>
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
      </div> */}

    </>
  );
};

export default EditProduct;
