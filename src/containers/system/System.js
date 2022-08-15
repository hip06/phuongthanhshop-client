import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'


const System = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(true)

    return (
        <div className='flex h-screen w-screen bg-gray-100' >
            {isShowSidebar && <Sidebar />}
            <div className={`${isShowSidebar ? 'w-r256' : 'w-full'} h-full`} >
                <Header setIsShowSidebar={setIsShowSidebar} />
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default System