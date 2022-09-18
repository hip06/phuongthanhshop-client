import { BiFilterAlt, BiSortAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProductCardCtHeight } from "../../components/ProductCard";
import { SelectCustomWidth, InputCustomWidth } from "../../components/InputCtWidth";
import { useState, useEffect, useRef } from "react";
import { Pagination } from "../../components/Pagination";

const FillerProducts = ({ color, page, setPage }) => {
  const { products } = useSelector((state) => state.app);
  const [selectedOption, setSelectedOption] = useState('Mới nhất')
  const [filterContent, setFilterContent] = useState('')
  const [productsShow, setProductsShow] = useState(null)
  const typingTimeOut = useRef(null)

  useEffect(() => {
    // handle api for sort here
    // Đợi mỗi @Sơn
  }, [selectedOption])

  useEffect(() => {
    if (filterContent.trim() === '') return
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current)
    }
    typingTimeOut.current = setTimeout(() => {
      //handle api for search here
      // Đợi mỗi @Sơn
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
              placeholder={'Thêm thông tin để lọc...'}
              PLarge={false}
              value={filterContent}
              setValue={setFilterContent}
            />
            <BiFilterAlt className="ml-[8px]" size={24} />
          </div>
          <div className="flex items-center justify-between mr-[12px]">
            <SelectCustomWidth
              options={['Mới nhất', 'Cũ nhất', 'A-Z', 'Z-A', 'Giá lớn nhất', 'Giá nhỏ nhất']}
              lable={'Phân loại'}
              widthP={'full'}
              selectValue={selectedOption}
              setSelectValue={setSelectedOption}
            />
          </div>
        </div>

        <div className="justify-center bg-[#d9d9d9] rounded-[12px] mt-[12px]">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 668: 3, 956: 4, 1286: 5, 2016: 6 }}>
            <Masonry className="justify-center bg-[#d9d9d9] rounded-[12px] pb-[24px]">
              {products[0]?.map((product, i) => {
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
            <Pagination color={color} page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillerProducts;
