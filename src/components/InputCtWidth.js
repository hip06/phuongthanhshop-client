import React, { memo } from 'react'

const InputCustomWidth = ({ value, lable, widthP }) => {

    return (
        <div className='w-[200px] my-3'>
            <label htmlFor="field" className='text-xs' >{lable}</label>
            <input
                id="field"
                value={value}
                className='focus:ring-indigo-500 
                focus:border-indigo-500 block 
                w-full pl-7 pr-12 sm:text-sm 
                border-gray-300 rounded-md
                h-[32px] '
            />
        </div>
    )
}

export default memo(InputCustomWidth)