import image from "../../ultils/image";
import { ProductCardMobile } from "../../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer";

const LayoutHome = () => {
  const params = useParams();
  const site = {
    color: "",
    banner: "",
    naviLeft: "",
    naviLeftText: "",
    linkLeft:'',
    naviRight: "",
    naviRightText: "",
    linkRight:'',
  };
  if (params["*"] === "fashion") {
    site.color = "#3f9df3";
    site.banner = image.fashionbanner;
    site.naviLeftText = "Đồ gia dụng";
    site.linkLeft="appliance"
    site.naviRightText = "Tạp hóa";
    site.linkRight='grocery'
  } else if (params["*"] === "appliance") {
    site.color = "#EF7300";
    site.banner = image.appliancebanner;
    site.naviLeftText = "Tạp hóa";
    site.linkLeft='grocery'
    site.naviRightText = "Thời trang";
    site.linkRight='fashion'
  } else {
    site.color = "#10C600";
    site.banner = image.grocerybanner;
    site.naviLeftText = "Đồ gia dụng";
    site.linkLeft='appliance'
    site.naviRightText = "Thời trang";
    site.linkRight='fashion';
  }
  return (
    <>
      <img src={site.banner}></img>

      <img
        src={image.freeship}
        className="ml-auto w-full mt-[5px] sm:w-[60%]"
      />

      {params["*"] === "fashion" ? (
        <div className="w-full flex justify-around mb-[20px] mt-[10px]">
          <Link to="/men-fashion">
            <img src={image.menfashion}></img>
          </Link>

          <Link to="/women-fashion">
            <img src={image.womenfashion}></img>
          </Link>
        </div>
      ) : (
        ""
      )}

      <div className="bg-[#d9d9d9] mb-[5px] p-[10px]">
        <div className="mb-[3px]">
          <span className="font-bold text-[15px]">#Top </span>
          <span style={{ color: site.color }} className="font-bold text-[15px]">
            bán chạy
          </span>
        </div>

        <div className="overflow-x-auto flex ">
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={site.color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={site.color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={site.color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={site.color}
            ></ProductCardMobile>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardMobile
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit="600.000d"
              color={site.color}
            ></ProductCardMobile>
          </div>
        </div>

        {params["*"] === "appliance" || params["*"] === "grocery" ? (
          <div>
            <div className="mt-[20px] mb-[5px]">
              <span
                style={{ color: site.color }}
                className="font-bold text-[15px]"
              >
                #Mới nhất
              </span>
            </div>

            <div className="overflow-x-auto flex ">
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardMobile
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit="600.000d"
                  color={site.color}
                ></ProductCardMobile>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardMobile
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit="600.000d"
                  color={site.color}
                ></ProductCardMobile>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardMobile
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit="600.000d"
                  color={site.color}
                ></ProductCardMobile>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardMobile
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit="600.000d"
                  color={site.color}
                ></ProductCardMobile>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardMobile
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit="600.000d"
                  color={site.color}
                ></ProductCardMobile>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="relative mb-[4px]">
        <Link to={`/home/${site.linkLeft}`}>
          <img src={image.navigro1}></img>
          <p className="absolute top-[40%] left-[10%] text-white font-black text-[16px] " style={{"-webkit-text-stroke-width":"1px","-webkit-text-stroke-color":'rgba(0,0,0,0.65)'}}>{site.naviLeftText}</p>
        </Link>
        <Link
          to={`/home/${site.linkRight}`}
          className="absolute top-0 right-0 z-10"
          style={{ clipPath: "polygon(100% 100%,100% 0%, 59% 0%, 1% 293%)" }}
        >
          <img src={image.naviapp1}></img>
          <p className="absolute z-1000 top-[40%] right-[15%] text-white font-black text-[16px] " style={{"-webkit-text-stroke-width":"1px","-webkit-text-stroke-color":'rgba(0,0,0,0.65)'}}>{site.naviRightText}</p>
        </Link>
      </div>
      <Footer params={params["*"]}></Footer>
    </>
  );
};
export default LayoutHome;
