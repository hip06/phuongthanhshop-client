import { BiFilterAlt, BiSortAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProductCardCtHeight } from "../../components/ProductCard";

const FillerProducts = () => {
  const { products } = useSelector((state) => state.app);
  return (
    <section className="my-[24px]">
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full bg-[#d9d9d9] p-[5px] px-[10px] rounded-[10px] items-center font-semibold text-[20px] h-[60px]">
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
            {products[0]?.map((product, i) => {
              console.log(product.name);
              return (
                <div className="flex justify-center mt-[20px]">
                  <ProductCardCtHeight
                    id={product.id}
                    image={product.mainImage}
                    name={product.name}
                    costPerUnit={product.costPerUnit}
                  ></ProductCardCtHeight>
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default FillerProducts;
