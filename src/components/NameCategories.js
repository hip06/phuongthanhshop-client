import { vi_uf8 } from "../ultils/constant";
import { useEffect, useRef } from "react";

const NameCategory = ({ category, color, index }) => {
    const cateName = useRef()
    useEffect(() => {
        if (cateName.current) cateName.current.style.color = color
    }, [color])
    return (
        <>
            {color && <div key={'name-cate-' + index} className="relative">
                <div className="font-ruda font-[500] text-[28px] text-center">{vi_uf8.shopname}</div>
                <div ref={cateName} className={`absolute top-[0px] right-[12px]
                font-qwitcher font-[500] text-[50px]`}>{category}</div>
            </div>}
        </>
    )
}

export default NameCategory;