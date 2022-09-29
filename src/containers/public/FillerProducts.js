import { BiFilterAlt } from "react-icons/bi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProductCardCtHeight } from "../../components/ProductCard";
import { SelectCustomWidth, InputCustomWidth } from "../../components/InputCtWidth";
import { useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { filters } from "../../ultils/constant";
const FillerProducts = ({ color, page, setPage, selectedOption, setSelectedOption, setSearchOnCategory, searchOnCategory }) => {
  const { products } = useSelector((state) => state.app);
  const typingTimeOut = useRef(null)
  const [filterContent, setFilterContent] = useState('')
  useEffect(() => {
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current)
    }
    typingTimeOut.current = setTimeout(() => {
      setSearchOnCategory(filterContent)
    }, 1000);
  }, [filterContent])
  return (
    <section className="my-[24px]">
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full bg-[#d9d9d9] p-[5px] pb-[8px] px-[10px] rounded-[10px] items-center font-semibold text-[20px] h-[68px]">
          <div className="flex items-center justify-between flex">
            <InputCustomWidth
              lable={'Lọc'}
              widthP={'full'}
              placeholder={'Tìm kiếm trong kho...'}
              PLarge={false}
              value={filterContent}
              setValue={setFilterContent}
            />
            <BiFilterAlt className="ml-[8px]" size={24} />
          </div>
          <div className="flex items-center justify-between mr-[12px]">
            <SelectCustomWidth

              options={filters}

              lable={'Phân loại'}
              widthP={'full'}
              selectValue={selectedOption}
              setSelectValue={setSelectedOption}
            />
          </div>
        </div>

        <div className="justify-center bg-[#d9d9d9] rounded-[12px] mt-[12px]">

          {products.length === 0 && <div className="w-full text-center mt-[12px] lg:text-lg"> Chúng tôi chưa có sản phẩm hợp với mô tả !</div>}
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 650: 3, 956: 4, 1286: 5 }}>

            <Masonry className="justify-center bg-[#d9d9d9] rounded-[12px] pb-[24px]">
              {products?.map((product) => {
                return (
                  <div className="flex justify-center mt-[20px]">
                    <ProductCardCtHeight
                      id={product.id}
                      image={product.mainImage}
                      name={product.name}
                      costPerUnit={product.costPerUnit}
                      color={color}
                    />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
          <div className="my-[24px]">
            <Pagination
              currentPage={page}
              setCurrentPage={setPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillerProducts;
