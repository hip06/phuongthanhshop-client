import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Pagination = ({ color, page, setPage }) => {
    const { pageLength } = useSelector((state) => state.app);
    return (
        <div className={`w-full`}>
            <div className="text-[18px] flex justify-center select-none">
                <div
                    onClick={() => setPage(1)}
                    className="p-[4px] mx-2 bg-[#fff] rounded-[4px] cursor-pointer">
                    <AiOutlineDoubleLeft size={30} />
                </div>
                <div className="p-[4px]">1</div>
                <div
                    onClick={() => page > 1 ? setPage(page - 1) : setPage(1)}
                    className="p-[4px] mx-2 bg-[#fff] rounded-[4px] cursor-pointer">
                    <AiOutlineLeft size={30} />
                </div>
                <div className="p-[4px]">{page}</div>
                <div
                    onClick={() => page < pageLength ? setPage(page + 1) : setPage(pageLength)}
                    className="p-[4px] mx-2 bg-[#fff] rounded-[4px] cursor-pointer">
                    <AiOutlineRight size={30} />
                </div>
                <div className="p-[4px]">{pageLength}</div>
                <div
                    onClick={() => setPage(pageLength)}
                    className="p-[4px] mx-2 bg-[#fff] rounded-[4px] cursor-pointer">
                    <AiOutlineDoubleRight size={30} />
                </div>
            </div>
        </div>
    );
};
