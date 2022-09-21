
import image from "../../ultils/image";
import { useParams, Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { InputSearch } from "../../components/InputCtWidth";
import { vi_uf8 } from "../../ultils/constant";
import icons from "../../ultils/icons";
import Banner from "../../components/Banner";
import BoxTopSeller from "../../components/BoxTopSeller";
import { FillerProducts } from "../public";

const LayoutHome = ({ setLoading, page, setPage }) => {
  const { IoMdArrowRoundDown, BiSearchAlt, AiOutlineClose, MdOutlinePhonelink } = icons;
  const params = useParams();
  const { categories } = useSelector(state => state.app)
  const [slideImage, setSlideImage] = useState('')
  const [valueSearch, setValueSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [mainColor, setMainColor] = useState('')
  const navigate =  useNavigate()


  useEffect(() => {
    categories?.map((category) => {
      if (params.slug === category?.valueEn) {
        setSlideImage(category.image)
        setMainColor(category.color)
      }
    })
  }, [params.slug])

  // useEffect(() => {
  //   categories?.map((category) => {
  //     let valueLowerCase = category.value.toLowerCase()
  //     document.getElementById(`cate-list-${valueLowerCase}`).style.color = category.color
  //   })
  // }, [slideImage])

  return (
    <>
      <div className="w-full lg:w-11/12 mx-auto">
        <div className="hidden lg:flex w-full mb-[12px] mt-[24px]">
          <div className="w-5/12">
            <div className="w-5/6 items-center bg-[#d9d9d9] flex mx-auto rounded-[12px] place-content-center p-5">
              <p className="font-[600] text-center text-[20px]">{vi_uf8.all_categories}</p>
              <p className="ml-[12px]">{<IoMdArrowRoundDown size={24} />}</p>
            </div>
          </div>
          <div className="w-5/12 items-center bg-[#F6EAEA] rounded-[12px] relative "
            onClick={(e) => {
              e.stopPropagation()
              setValueSearch('')
              setIsSearching(false)
            }}>
            <InputSearch value={valueSearch}
              setValue={setValueSearch}
              placeholder={'Thêm thông tin để tìm kiếm...'}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
            />
            <p className="absolute top-[18px] right-[28px]">{isSearching ? <AiOutlineClose size={26} /> : <BiSearchAlt size={30} />}</p>
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
        <div className=" w-full flex mb-[24px]">
          <div className="hidden lg:block w-5/12">
            <div className="w-5/6 bg-[#d9d9d9] mx-auto rounded-[12px] h-full p-5">
              {
                categories?.map((category) => {
                  let weight = 'font-[400]'
                  if (params["*"] === category?.valueEn) {
                    weight = 'font-[800]'
                  }
                  return (<div 
                    onClick={() => navigate(`/home/${category?.valueEn}`)}
                    className={`w-[80%] mx-auto border-black border-b-[2px] h-[40px] text-[24px] cursor-pointer ${weight} `}>{category.valueVi}</div>)
                })
              }
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <img className="w-full max-h-[350px] center" src={slideImage} alt="slide" />
            <Banner color={mainColor} />
          </div>
        </div>
        {params["*"] === "fashion" ? (
          <div className="w-full overflow-hidden mx-auto flex mb-[20px] mt-[10px]">
            <div className="w-1/2 mr-[2px] h-full">
              <img className="max-w-full mx-auto rounded" src={image.fashionMan} />
            </div>

            <div className="w-1/2 ml-[2px] h-full">
              <img className="max-w-full mx-auto rounded h-full" src={image.fashionGirl} />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
          <BoxTopSeller color={mainColor} />
        </div>
        <div className="w-full">
          <FillerProducts color={mainColor} page={page} setPage={setPage} />
        </div>

        {/* <div className="relative mb-[4px] lg:hidden">
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
        </div> */}

      </div>
      <Footer color={mainColor} category={params['*']} />
    </>
  );
};
export default LayoutHome;

