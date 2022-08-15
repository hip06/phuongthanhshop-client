import React, { memo } from 'react'

const Button = ({ text, bgColor, textColor, onClick, fullWidth }) => {
    return (
        <button
            type='button'
            className={`outline-none ${bgColor} ${textColor} rounded-md py-2 px-4 opacity-80 hover:opacity-100 ${fullWidth && 'w-full my-3'} `}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default memo(Button)