import React, { useEffect, useState, useRef } from "react";
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
import { Editor } from '@tinymce/tinymce-react';
import { ProductCardCtHeight } from "../../components/ProductCard";
import { GroupImageCtWidth } from "../../components/GroupImageCtWidth";
const EditProduct = () => {
  const [productName, setProductName] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [shortDes, setShortDes] = useState("");
  const [image, setImage] = useState({
    imageMain: '',
    image1: '',
    image2: '',
    image3: '',
  });
  const [variant, setVariant] = useState([]);
  const [variantValue, setVariantValue] = useState({ name: '', value: [] });
  const [variantChild, setVariantChild] = useState({ type: '', price: '' })


  const { categories } = useSelector((state) => state.app);

  const handleSubmit = async () => {
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
  const editorRef = useRef(null);
  const log = () => {

    if (editorRef.current) {
      const des = editorRef.current.getContent()
      console.log(des);
      setShortDes(des)
    }
  };
  useEffect(() => {
    if (typeof image.imageMain !== 'string') image.imageMain.preview = URL.createObjectURL(image.imageMain);
    if (typeof image.image1 !== 'string') image.image1.preview = URL.createObjectURL(image.image1);
    if (typeof image.image2 !== 'string') image.image2.preview = URL.createObjectURL(image.image2);
    if (typeof image.image3 !== 'string') image.image3.preview = URL.createObjectURL(image.image3);

  }, [image.imageMain]);


  return (
    <>

      <div className="w-full items-center bg-[#d9d9d9] rounded justify-between p-5 h-[700px]">
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

            <div className="h-[350px]">
              <Editor
                apiKey='your-api-key'
                onInit={(evt, editor) => { return editorRef.current = editor }}
                initialValue="<p>This is the initial content of the editor.</p>"
                onEditorChange={(e) => { console.log(e); }}
                onKeyDown={(e) => { console.log(e); }}
                init={{
                  max_height: 300,
                  width: 'full',
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'charmap',
                    'anchor', 'searchreplace', 'visualblocks', 'code',
                    'insertdatetime', 'media'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
              <Button
                text="ADD CONTENT"
                bgColor="#4ed14b"
                textColor="#fff"
                width="100%"
                onClick={log}
              ></Button>
            </div>



            {/* input image */}



          </div>
          <div className="w-1/2 pl-3">
            <InputVariant setVariantChild={setVariantChild} setVariant={setVariant} variant={variant} variantChild={variantChild} variantValue={variantValue} setVariantValue={setVariantValue} />
            <div className=" w-[50%] mt-3">
              <input
                type="file"
                name="imageMain"
                accept="image/*"
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



        </div>
        <div className="flex">
          <Button
            text="ADD PRODUCT"
            bgColor="#4ed14b"
            textColor="#fff"
            width="50%"
            height='2'
            onClick={handleSubmit}
          ></Button>
          <Button
            text="SEE PREVIEW"
            bgColor="#cf2b2b"
            textColor="#fff"
            width="50%"
            height='2'
            onClick={handleSubmit}
          ></Button>
        </div>
      </div>
      <h1 className="text-3xl">Xem trước tại đây</h1>
      <div className="w-full items-center bg-[#d9d9d9] rounded p-3 justify-between p-5">
        {console.log(image.imageMain?.preview)}
        <img src={image.imageMain?.preview ? image.imageMain?.preview : ''} width='100%' height='100%' alt="" />
      </div>

    </>
  );
};

export default EditProduct;
