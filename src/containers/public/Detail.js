import Footer from "../../components/Footer";
import Header from "../public/Header";
import { useSelector } from "react-redux";
import { GroupImageCtWidth } from "../../components/GroupImageCtWidth";
import { convertPrice } from "../../ultils/common";

const Detail = () => {
    const { currentProduct } = useSelector((state) => state.app);
    const {
        categoryData,
        name,
        costPerUnit,
        description,
        scores,
        soldCounter
    } = currentProduct

    return (
        <section className="w-full">
            <Header categoryProvided={categoryData} />
            <div className="block lg:flex my-[12px]">
                <div className="">
                    {currentProduct && <GroupImageCtWidth data={currentProduct} />}
                </div>
                <div className="w-[90%] mx-auto">
                    <div className="">{name}</div>
                    <div className="flex">
                        <div className="w-[50%]">Đã bán:  
                            <p className="inline"> {soldCounter}</p>
                        </div>
                        <div className="w-[50%]">Đánh giá: 
                            <p className="inline"> {scores}</p>
                        </div>
                    </div>
                    <div className="bg-[#ccc]">{convertPrice(costPerUnit)}</div>
                    <div className="">{convertPrice(9999000000)}</div>
                    <div className="hidden lg:relative w-full h-[30px]">
                        <div className="absolute left-0 bg-[#ccc]">
                            Thêm vào giỏ hàng
                        </div>
                        <div className="absolute right-0 bg-[#ccc]">
                            Mua hàng
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto">
                <p className="">Mô tả sản phẩm :</p>
                {description}
            </div>


            <div className="w-full">
                <Footer
                    color={categoryData?.color}
                    category={categoryData?.valueEn} />
            </div>

        </section>
    );
}
export default Detail;