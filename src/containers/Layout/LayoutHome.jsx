import image from "../../ultils/image";
import { useParams, Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputSearch } from "../../components/InputCtWidth";
import { vi_uf8 } from "../../ultils/constant";
import icons from "../../ultils/icons";
import Banner from "../../components/Banner";
import BoxTopSeller from "../../components/BoxTopSeller";
import { FillerProducts } from "../public";
import * as actions from "../../store/actions";

const LayoutHome = ({ setLoading, page, setPage,selectedOption, setSelectedOption, setSearchOnCategory,searchOnCategory }) => {
  const { IoMdArrowRoundDown, BiSearchAlt, AiOutlineClose, MdOutlinePhonelink } = icons;

  const params = useParams();
  const { categories } = useSelector((state) => state.app);
  const [slideImage, setSlideImage] = useState("");
  const [valueSearch, setValueSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [mainColor, setMainColor] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    categories?.map((category) => {
      if (params['*'] === category?.valueEn) {
        setSlideImage(category.image);
        setMainColor(category.color);
      }

    })
  }, [params.slug,categories])

  return (
    <div className="">
      <div className="w-full lg:w-11/12 mx-auto">
        <div className="hidden lg:flex w-full mb-[12px] mt-[24px]">
          <div className="w-5/12">
            <div className="w-[90%] items-center bg-[#d9d9d9] flex ml-0 rounded-[12px] place-content-center p-5">
              <p className="font-[600] text-center text-[20px]">
                {vi_uf8.all_categories}
              </p>
              <p className="ml-[12px]">{<IoMdArrowRoundDown size={24} />}</p>
            </div>
          </div>
          <div
            className="w-5/12 items-center bg-[#F6EAEA] rounded-[12px] relative "
            onClick={(e) => {
              e.stopPropagation();
              setValueSearch("");
              setIsSearching(false);
            }}
          >
            <InputSearch
              value={valueSearch}
              setValue={setValueSearch}
              placeholder={"Tìm kiếm trên toàn bộ trang..."}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
            />
            <p className="absolute top-[18px] right-[28px]">
              {isSearching ? (
                <AiOutlineClose size={26} />
              ) : (
                <BiSearchAlt size={30} />
              )}
            </p>
          </div>
          <div className="w-2/12 relative">
            <div className="absolute right-0 w-[80%]">
              <div className="w-full">
                <div className="block w-full text-right">
                  +84 {vi_uf8.phone}
                </div>
                <div className="block w-full text-right relative">
                  {" "}
                  {vi_uf8.support_time}
                  <p className="absolute top-[-12px] right-[128px]">
                    <MdOutlinePhonelink size={20} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex mb-[24px]">
          <div className="hidden lg:block w-5/12">
            <div className="w-[90%] bg-[#d9d9d9] ml-0 rounded-[12px] h-full p-5">
              {categories?.map((category) => {
                let weight = "font-[400]";
                if (params["*"] === category?.valueEn) {
                  weight = "font-[800]";
                }
                return (
                  <div
                    onClick={() => {
                      dispatch(actions.getCodeCategory(category?.code));
                      navigate(`/home/${category?.valueEn}`);
                    }}
                    className={`w-[80%] mx-auto border-black border-b-[2px] h-[40px] text-[24px] cursor-pointer ${weight} `}
                  >
                    {category.valueVi}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <img
              className="w-full max-h-[350px] center"
              src={slideImage}
              alt="slide"
            />
            <Banner color={mainColor} />
          </div>
        </div>
        {params["*"] === "fashion" ? (
          <div className="w-full overflow-hidden mx-auto flex mb-[20px] mt-[10px]">
            <div className="w-1/2 mr-[2px] h-full">
              <img
                className="max-w-full mx-auto rounded"
                src={image.fashionMan}
                alt="img"
              />
            </div>

            <div className="w-1/2 ml-[2px] h-full">
              <img
                className="max-w-full mx-auto rounded h-full"
                src={image.fashionGirl}
                alt="img"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
          <BoxTopSeller color={mainColor} />
        </div>
        <div className="w-full">
          <FillerProducts 
          color={mainColor}
          page={page} 
          setPage={setPage}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setSearchOnCategory={setSearchOnCategory}
          searchOnCategory={searchOnCategory} />
        </div>

      </div>
      <Footer color={mainColor} category={params["*"]} />
    </div>
  );
};
export default LayoutHome;
