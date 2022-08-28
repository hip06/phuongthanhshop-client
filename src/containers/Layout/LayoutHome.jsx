import fashionbanner from "../../assets/fashionbanner.png";
import appliancebanner from "../../assets/appliancebanner.png";
import grocerybanner from "../../assets/grocerybanner.png";
import menfashion from "../../assets/menfashion.png";
import womenfashion from "../../assets/womenfashion.png";
import freeship from "../../assets/freeship.png";
import { ProductCardMobile } from "../../components/ProductCard";
import image from "../../assets/temp.png";
import { useParams, Link } from "react-router-dom";

const LayoutHome = () => {
  const params = useParams();
  let color;
  if (params["*"] === "fashion") {
    color = "#3f9df3";
  } else if (params["*"] === "appliance") {
    color = "#EF7300";
  } else color = "#10C600";
  return (
    <>
      {params["*"] === "fashion" ? (
        <img className="" src={fashionbanner}></img>
      ) : (
        ""
      )}
      {params["*"] === "appliance" ? (
        <img className="" src={appliancebanner}></img>
      ) : (
        ""
      )}
      {params["*"] === "grocery" ? (
        <img className="" src={grocerybanner}></img>
      ) : (
        ""
      )}

      <img src={freeship} className="ml-auto w-full mt-[5px] sm:w-[60%]" />

      {params["*"]==='fashion'?<div className="w-full flex justify-around mb-[20px] mt-[10px]">
        <Link to="/men-fashion">
          <img src={menfashion}></img>
        </Link>

        <Link to="/women-fashion">
          <img src={womenfashion}></img>
        </Link>
      </div>:""}

      <div className="bg-[#d9d9d9] mb-[20px] p-[10px]">
        <div className="mb-[3px]">
          <span className="font-bold text-[15px]">#Top </span>
          <span style={{ color: color }} className="font-bold text-[15px]">
            bán chạy
          </span>
        </div>

        <div className="overflow-x-auto flex ">
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
        </div>
      </div>
      <div>hi</div>
    </>
  );
};
export default LayoutHome;
