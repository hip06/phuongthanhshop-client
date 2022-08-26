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
export const ButtonSmall = ({ content, color }) => {

    return (
        <button className="text-base text-white px-[15px] py-[9px] rounded-lg hover:-translate-y-0.5 transition-all ease-in-out active:translate-y-0.5 mr-[20px]" style={{ backgroundColor: color }}>{content}</button>
    );
}

export const ButtonMedium = ({ content, color }) => {

    return (
        <button className="text-base text-white px-10 py-5 rounded-lg hover:-translate-y-0.5 transition-all ease-in-out active:translate-y-0.5 mr-[20px]" style={{ backgroundColor: color }}>{content}</button>
    );
}
export const ButtonLarge = ({ content, color }) => {

    return (
        <button className="text-base text-white px-16 py-5 rounded-lg hover:-translate-y-0.5 transition-all ease-in-out active:translate-y-0.5 mr-[20px]" style={{ backgroundColor: color }}>{content}</button>
    );
}

export const ButtonCtWidth = ({ content, color, width, height, onAction }) => {

    return (
        <button className={`text-base text-white 
        px-${width} py-${height} rounded-lg 
        hover:-translate-y-0.5 transition-all 
        ease-in-out active:translate-y-0.5 
        mr-[20px] bg-[${color}]`}
            onClick={() => onAction()}>{content}</button>
    );
}

export default memo(Button)