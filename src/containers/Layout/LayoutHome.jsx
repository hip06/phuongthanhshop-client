import image from "../../ultils/image"
import { ProductCardMobile } from "../../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer";

const LayoutHome = () => {
  const params = useParams();
  let color;
  let banner;
  if (params["*"] === "fashion") {
    color = "#3f9df3";
    banner=image.fashionbanner;
  } else if (params["*"] === "appliance") {
    color = "#EF7300";
    banner=image.appliancebanner
  } else {
    color = "#10C600";
    banner=image.grocerybanner
  }
  return (
    <>
      <img src={banner} ></img>

      <img src={image.freeship} className="ml-auto w-full mt-[5px] sm:w-[60%]" />

      {params["*"]==='fashion'?<div className="w-full flex justify-around mb-[20px] mt-[10px]">
        <Link to="/men-fashion">
          <img src={image.menfashion}></img>
        </Link>

        <Link to="/women-fashion">
          <img src={image.womenfashion}></img>
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
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
        </div>

        {params["*"]==='appliance'||params["*"]==='grocery'? <div>
        <div className="mt-[20px] mb-[5px]">
          <span style={{ color: color }} className="font-bold text-[15px]">
            #Mới nhất
          </span>
        </div>

        <div className="overflow-x-auto flex ">
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={color}
            ></ProductCardMobile>
          </div>
        </div>

        </div>:''}
      </div>
      <Footer params={params["*"]}></Footer>
    </>
  );
};
export default LayoutHome;
