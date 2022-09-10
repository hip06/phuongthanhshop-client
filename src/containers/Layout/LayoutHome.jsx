import image from "../../ultils/image";
import { getSite } from "../../ultils/constant";
import { ProductCardCtHeight } from "../../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { BiFilterAlt, BiSortAlt2 } from "react-icons/bi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { InputSearch } from "../../components/InputCtWidth";
import { vi_uf8 } from "../../ultils/constant";
import icons from "../../ultils/icons";

const LayoutHome = ({ setLoading }) => {
  const { IoMdArrowRoundDown, BiSearchAlt, AiOutlineClose, MdOutlinePhonelink } = icons;
  const params = useParams();
  const site = getSite(params)
  const { categories } = useSelector(state => state.app)
  const [slideImage, setSlideImage] = useState('')
  const [valueSearch, setValueSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    categories?.rows?.map((category) => {
      let valueLowerCase = category.value.toLowerCase()
      if (params["*"] === valueLowerCase) {
        setSlideImage(category.image)
      }
    })
  }, [params["*"]])

  return (
    <div className="w-screen lg:w-11/12 mx-auto">
      <div className="hidden lg:flex w-full mb-[12px] mt-[24px]">
        <div className="w-5/12">
          <div className="w-5/6 items-center bg-[#d9d9d9] flex mx-auto rounded-[12px] p-3 place-content-center p-5">
            <p className="font-[600] text-center text-[20px]">{vi_uf8.all_categories}</p>
            <p className="ml-[12px]">{<IoMdArrowRoundDown size={24} />}</p>
          </div>
        </div>
        <div className="w-5/12 items-center bg-[#F6EAEA] rounded-[12px] relative "
          onClick={() => {
            setValueSearch('')
            setIsSearching(false)
          }}>
          <InputSearch value={valueSearch}
            setValue={setValueSearch}
            placeholder={'Thêm thông tin để tìm kiếm...'}
            isSearching={isSearching}
            setIsSearching={setIsSearching}
          />
          <p className="absolute top-[14px] right-[24px]">{isSearching ? <AiOutlineClose size={26} /> : <BiSearchAlt size={30} />}</p>
        </div>
        <div className="w-2/12 relative">
          <div className="absolute right-0 w-[80%]">
            <div className="w-full">
              <div className="block w-full text-right">+84 {vi_uf8.phone}</div>
              <div className="block w-full text-right relative"> {vi_uf8.support_time}
                <p className="absolute top-[-12px] right-[128px]"><MdOutlinePhonelink size={20} /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex">
        <div className="hidden lg:block w-5/12">

        </div>
        <div className="w-full lg:w-7/12">
          <img className="w-full max-h-[350px] center" src={slideImage} alt="slide" />

        </div>
      </div>

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
          {/* {products?.map((product, i) => (
            <div className="[&:not(:last-child)]:mr-5">
              <ProductCardCtHeight
                id={product.id}
                image={product.mainImage}
                name={product.name}
                costPerUnit={product.costPerUnit}
                color={site.color}
              ></ProductCardCtHeight>
            </div>
          ))} */}
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
              {/* {products.map((product, i) => (
                <div className="[&:not(:last-child)]:mr-5">
                  <ProductCardCtHeight
                    id={product.id}
                    image={product.mainImage}
                    name={product.name}
                    costPerUnit={product.costPerUnit}
                    color={site.color}
                  ></ProductCardCtHeight>
                </div>
              ))} */}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <section>
        {params["*"] === "grocery" ||
          (params["*"] === "appliance" && (
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

              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4 }}>
                <Masonry className="justify-center">
                  {/* {products.map((product, i) => (
                    <div className="flex justify-center mt-[20px]">
                      <ProductCardCtHeight
                        id={product.id}
                        image={product.mainImage}
                        name={product.name}
                        costPerUnit={product.costPerUnit}
                        color={site.color}
                      ></ProductCardCtHeight>
                    </div>
                  ))} */}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          ))}
      </section>

      <div className="relative mb-[4px] lg:hidden">
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
