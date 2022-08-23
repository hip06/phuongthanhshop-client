import React from 'react';
import { ButtonMedium } from "../../components/Button"

const ManageCategory = () => {
    const tempCate = [{ name: 'Thuc pham', quantity: '200', date: '20/02/2022' },
    { name: 'Quan ao', quantity: '100', date: '20/02/2022' },
    { name: 'Do dung', quantity: '20', date: '20/02/2022' }];

    const renderCateList = tempCate.map((cate, i) => {
        return (
            <div key={i} className="flex w-full bg-white items-center h-[90px] [&:not(:first-child)]:mt-2">
                <div className="w-[28%] p-10" >
                    <p className=' text-xl font-bold '>{cate.name}</p>
                </div>

                <div className="w-[28%]">
                    <p className=' text-xl font-bold '>{cate.quantity}</p>
                </div>

                <div className="w-[28%]">
                    <p className=' text-xl font-bold '>{cate.date}</p>
                </div>
                <ButtonMedium content='Sửa' color='#4ED14B'></ButtonMedium>
                <ButtonMedium content='Mua' color='#CF2B2B'></ButtonMedium>
            </div>
        )
    });
    return (
        <>
            {renderCateList}
        </>
    );
}

export default ManageCategory;