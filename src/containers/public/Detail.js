import Footer from "../../components/Footer";
import Header from "../public/Header";
import { useSelector, useDispatch } from "react-redux";
import { GroupImageCtWidth } from "../../components/GroupImageCtWidth";
import { convertPrice } from "../../ultils/common";
import icons from "../../ultils/icons";
import BoxVariants from "../../components/BoxVariants";
import { useState, useEffect } from "react";
import { GroupBtnsPurchase } from "../../components/GroupBtnsPurchase";
import { useParams } from "react-router-dom";
import ApiProduct from "../../apis/product";

const { AiTwotoneStar, AiOutlineShoppingCart, BiPurchaseTag } = icons;
const Detail = () => {
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState(false);
  const id = useParams()['id'];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res= await ApiProduct.getProductByIdClient({id:id});
        if(res.status===0)
        {
            setCurrentProduct(res.productData.rows[0]);
        }
      } catch (e) {

      }
    };
    fetchData();
  }, []);
  const {
    categoryData,
    name,
    hashtags,
    costPerUnit,
    description,
    scores,
    soldCounter,
    votedCounter,
    variants,
  } = currentProduct;
  const [priceShowed, setPriceShowed] = useState(costPerUnit);

  const getpreSalePrice = () => {
    const prePriceObject = variants?.filter(
      (variant) => variant.name === "preSalePrice"
    )[0];
    return prePriceObject?.value[0].price;
  };

  return (
    <>
   {currentProduct&& <section className="w-full">
        
      <Header categoryProvided={categoryData} />
      <div className="block lg:flex my-[12px]">
        <div className="mb-[12px]">
          {currentProduct && <GroupImageCtWidth data={currentProduct} />}
        </div>
        <div className="w-[90%] mx-auto">
          <div className="text-xl font-semibold">{name}</div>
          {hashtags && <div className="my-[8px]">#hash-tags:</div>}
          <div className="flex">
            <div className="w-[50%] text-[#721016]">
              Đã bán:
              <p className="inline"> {soldCounter}</p>
            </div>
            <div className="w-[50%] text-[#721016]">
              Đánh giá:
              <p className="inline text-[#f6c800]">
                {votedCounter === 0
                  ? " ..."
                  : Math.round(scores / votedCounter)}
                <AiTwotoneStar className="inline" size={26} />
              </p>
            </div>
          </div>
          <div
            className="bg-sky-400 w-[80%] mx-auto rounded-[30px] my-[8px] py-[12px] text-[#fff]
                     text-center text-lg  font-bold"
          >
            {convertPrice(priceShowed)}
          </div>
          <div className="w-full text-center text-rose-500 line-through">
            {convertPrice(getpreSalePrice())}
          </div>
          {variants.length >= 1 && (
            <div className="">
              {variants?.filter((variant) => variant.name !== "preSalePrice")?.map((variant) => {
                  return (
                    <BoxVariants
                      defautPrice={costPerUnit}
                      setPriceShowed={setPriceShowed}
                      variants={variant}
                    />
                  );
                })}
            </div>
          )}
          <div className="w-full">
            <GroupBtnsPurchase device={"laptop"} />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <p className="">Mô tả sản phẩm :</p>
        {description}
      </div>

      <div className="w-full">
        <GroupBtnsPurchase device={"mobile"} />
      </div>

      <div className="w-[90%] mt-[24px] mx-auto">
        <p className="">Nhận xét sản phẩm :</p>
      </div>

      <div className="w-full">
        <Footer color={categoryData?.color} category={categoryData?.valueEn} />
      </div>
    </section> }
    
    </>
  );
};
export default Detail;
