import React, { useEffect, useState } from "react";
import {
  InputCustomWidth,
  SelectCustomWidth,
  HashTagCustomWidth,
  TextCustomWidth,
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
  const [imageMain, setImageMain] = useState({});
  const [image1, setImage1] = useState({});
  const [image2, setImage2] = useState({});
  const [image3, setImage3] = useState({});
  const { categories } = useSelector((state) => state.app);

  const handleSubmit = async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("mainImage", imageMain);
    bodyFormData.append("image1", image1);
    bodyFormData.append("image2", image2);
    bodyFormData.append("image3", image3);
    bodyFormData.append("name", productName);
    bodyFormData.append("costPerUnit", price);
    bodyFormData.append("description", shortDes);
    bodyFormData.append("categoryCode", selectValue);
    ApiProduct.create(bodyFormData);
  };
  useEffect(() => {
    categories.length > 0 && setSelectValue(categories[0].code);
  }, [categories]);
  // if (imageMain !== "") imageMain?.preview = URL.createObjectURL(imageMain);
  // if (image1 !== "") image1.preview = URL.createObjectURL(image1);
  // if (image2 !== "") image2.preview = URL.createObjectURL(image2);
  // if (image3 !== "") image3.preview = URL.createObjectURL(image3);
  useEffect(() => {}, [imageMain]);
  return (
    <>
      <div
        className=" w-[800px]  rounded  flex flex-col  items-center z-10"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full items-center bg-[#d9d9d9] rounded p-3 justify-between p-5 h-[500px]">
          <h1 className="text-3xl text-center">Nh???p th??ng tin t???i ????y</h1>
          <div className="h-[20%]">
            <InputCustomWidth
              widthP={"full"}
              lable="T??n s???n ph???m "
              placeholder="T??n s???n ph???m..."
              PLarge={true}
              value={productName}
              setValue={setProductName}
            />
          </div>

          <div className="flex h-1/5 justify-between">
            <div className="flex w-[70%] ">
              <SelectCustomWidth
                widthP="[30%]"
                lable="Lo???i h??ng"
                options={categories}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
              />
              <InputCustomWidth
                widthP="[30%]"
                lable="Gi??"
                placeholder="Gi??: VND"
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
          <div className="flex">
            <div className=" w-[46%] mr-[24px]">
              <div className="h-1/2 ">
                <InputCustomWidth
                  widthP={"full"}
                  lable="Mi??u t??? ng???n g???n"
                  placeholder="Mi??u t???..."
                  PLarge={true}
                  value={shortDes}
                  setValue={setShortDes}
                />
              </div>
              <TextCustomWidth
                widthP="full"
                lable="Mi??u t??? chi ti???t"
                placeholder="Mi??u t??? chi ti???t t???i ????y..."
              />
            </div>
            <div className=" w-[50%]">
              <input
                type="file"
                name="imageMain"
                onChange={(e) => {
                  const file = e.target.files[0];

                  setImageMain(file);
                }}
              />
              <input
                type="file"
                name="image1"
                onChange={(e) => {
                  setImage1(e.target.files[0]);
                }}
              />
              <input
                type="file"
                name="image2"
                onChange={(e) => {
                  setImage2(e.target.files[0]);
                }}
              />
              <input
                type="file"
                name="image3"
                onChange={(e) => {
                  setImage3(e.target.files[0]);
                }}
              />
              {/* <InputFileCustomWidth
                lable="???nh 1"
                widthP="[100%]"
                valueImg={image1}
                setValueImg={setImage1}
              />
              <InputFileCustomWidth
                lable="???nh 2"
                widthP="[100%]"
                valueImg={image2}
                setValueImg={setImage2}
              />
              <InputFileCustomWidth
                lable="???nh 3"
                widthP="[100%]"
                valueImg={image3}
                setValueImg={setImage3}
              />*/}
            </div>
            <Button text="Submit" onClick={handleSubmit}></Button>
          </div>
        </div>
        {/* <h1 className="text-3xl">Xem tr?????c t???i ????y</h1>
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
              <p>Xem tr?????c chi ti???t s???n ph???m tr??n mobile t???i ????y</p>
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
            <p>Xem tr?????c chi ti???t s???n ph???m tr??n desktop t???i ????y</p>

            <GroupImageCtWidth
              widthP="400px"
              mainImage={imageMain?.preview}
            />
          </div>
      </div> */}
      </div>
    </>
  );
};

export default EditProduct;
