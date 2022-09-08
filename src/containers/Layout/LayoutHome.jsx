import image from "../../ultils/image";
import { getSite } from "../../ultils/constant";
import { ProductCardCtHeight } from "../../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {BiFilterAlt,BiSortAlt2} from "react-icons/bi";
import Masonry,{ResponsiveMasonry} from "react-responsive-masonry";

const LayoutHome = () => {
  const params = useParams();
  const site = getSite(params);
  return (
    <div>
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
            <ProductCardCtHeight
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit={600000}
              color={site.color}
            ></ProductCardCtHeight>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardCtHeight
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit={600000}
              color={site.color}
            ></ProductCardCtHeight>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardCtHeight
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit={600000}
              color={site.color}
            ></ProductCardCtHeight>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardCtHeight
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit={600000}
              color={site.color}
            ></ProductCardCtHeight>
          </div>
          <div className="[&:not(:last-child)]:mr-5">
            <ProductCardCtHeight
              image={image.imagetemp}
              name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
              costPerUnit={600000}
              color={site.color}
            ></ProductCardCtHeight>
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
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <section>
        {params["*"] === "grocery" ||
          (params["*"] === "appliance" && 
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-between w-full bg-[#d9d9d9] m-[5px] p-[5px] px-[10px] rounded-[10px] items-center font-semibold text-[20px] h-[60px]">
              <div className="flex items-center justify-between">
                <p className="mr-[5px]">Lọc</p>
                <BiFilterAlt size={22}></BiFilterAlt>
              </div>
              <div className="flex items-center justify-between">
                <p className="mr-[5px]">Phân loại</p>
                <BiSortAlt2 size={22}></BiSortAlt2>
              </div>
            </div>

            <ResponsiveMasonry columnsCountBreakPoints={{350:2,750:4}} >
              <Masonry>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              <div className="[&:not(:last-child)]:mr-5">
                <ProductCardCtHeight
                  image={image.imagetemp}
                  name="Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12"
                  costPerUnit={600000}
                  color={site.color}
                ></ProductCardCtHeight>
              </div>
              </Masonry>
            </ResponsiveMasonry>
          </div>)
          }
        

      </section>

      <div className="relative mb-[4px]">
        <Link to={`/home/${site.linkLeft}`}>
          <img src={site.naviLeftImage}></img>
          <p
            className="absolute top-[40%] left-[10%] text-white font-black text-[16px] "
            style={{
              "-webkit-text-stroke-width": "1px",
              "-webkit-text-stroke-color": "rgba(0,0,0,0.65)",
            }}
          >
            {site.naviLeftText}
          </p>
        </Link>

        <Link
          to={`/home/${site.linkRight}`}
          className="absolute top-0 right-0 z-10"
          style={{ clipPath: "polygon(100% 100%,100% 0%, 59% 0%, 1% 293%)" }}
        >
          <img src={site.naviRightImage}></img>
          <p
            className="absolute z-10 top-[40%] right-[15%] text-white font-black text-[16px] "
            style={{
              "-webkit-text-stroke-width": "1px",
              "-webkit-text-stroke-color": "rgba(0,0,0,0.65)",
            }}
          >
            {site.naviRightText}
          </p>
        </Link>
      </div>
      <Footer params={params["*"]}></Footer>
    </div>
  );
};
export default LayoutHome;
