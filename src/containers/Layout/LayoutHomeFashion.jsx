import banner from "../../assets/fashionbanner.png";
import freeship from "../../assets/freeship.png";
import { ProductCardMobile } from "../../components/ProductCard";
import image from "../../assets/temp.png";
const LayoutHomeFashion = () => {
  return (
    <>
      <img className="" src={banner}></img>
      <img src={freeship} className="ml-auto w-full mt-[5px] sm:w-[60%]" />
      <div className="bg-[#d9d9d9] mb-[20px] p-[10px]">
        <p>#Top bán chạy</p>
        <ProductCardMobile
          image={image}
          name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
          costPerUnit="600.000d"
          color="#3f9df3"
        ></ProductCardMobile>
      </div>
      <div>hi</div>
    </>
  );
};
export default LayoutHomeFashion;
