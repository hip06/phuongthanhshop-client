import React from 'react';
import { ButtonMedium, ButtonSmall } from '../../components/Button';
import image from '../../assets/temp.png';
import searchIcon from "../../assets/icon/search.svg";
import sortIcon from "../../assets/icon/sort.svg";
import {useState} from 'react'

const ManageProduct = () => {
    const [isCheckAll,setIsCheckAll] =useState(false);  
    const tempData = [{
        image: '',
        name: 'Hop com cua anh Hiep',
        category: 'Gia dung',
        price: '150.000d'
    }, {
        image: '',
        name: 'Hop com cua anh Hiep',
        category: 'Gia dung',
        price: '150.000d'
    }, {
        image: '',
        name: 'Hop com cua anh Hiep',
        category: 'Gia dung',
        price: '150.000d'
    }]
    const checkbox= isCheckAll?<input type='checkbox' className='h-[17.5px] w-[17.5px]' checked></input>: <input type='checkbox' className='h-[17.5px] w-[17.5px]' ></input>
    const renderProductList = tempData.map((product, i) => {
        return (
            <div key={i} className='flex items-center bg-white [&:not(:last-child)]:mb-[10px] w-full rounded-lg h-[102px] font-bold text-xl'>
                <div className='w-[3%] pl-[30px] '>
                    {checkbox}
                </div>
                <div className=' w-[15%] pl-[70px]'>
                    <img src={image} />
                </div>
                <div className='w-[20%]'>
                    <p>{product.name}</p>
                </div>
                <div className='w-[10%]'>
                    <p>{product.category}</p>
                </div>
                <div className='w-[10%]'>
                    <p>{product.price}</p>
                </div>
                <ButtonMedium content='Sửa' color='#4ED14B'></ButtonMedium>
                <ButtonMedium content='Xóa' color='#CF2B2B'></ButtonMedium>
            </div>

        )
    })
    return (
        <>
            <h1 className='text-3xl'>Quản lí sản phẩm</h1>
            <div className='flex w-full items-center'>
                <div className='w-[10%] pl-[30px] '>
                    <input type='checkbox' className='h-[28px] w-[28px]' onClick={()=>{setIsCheckAll(!isCheckAll)}}></input>
                </div>
                <div className='font-bold text-2xl'>
                    <p> Đã chọn: 0</p>
                </div>
                <ButtonSmall content='Action' color='#E92828'></ButtonSmall>
                <div className='flex items-center'>
                    <input></input>
                    <img src={searchIcon}></img>
                </div>
                <div className='flex items-center'>
                    <input></input>
                    <img src={sortIcon}></img>
                </div>
            </div>
            <div className='bg-[#d9d9d9] p-[18px] rounded-[10px]'>
                <div className='flex'>
                    <div>Tên sản phẩm</div>
                    <div>Loại hàng</div>
                    <div>Giá</div>
                </div>
                {renderProductList}
            </div>
        </>
    );
}

export default ManageProduct