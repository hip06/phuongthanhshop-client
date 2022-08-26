import React, { memo } from 'react'
import ApiCategory from '../apis/category';

const handlerAction = (action) => {
    switch (action.type) {
        case "DELETE":
            const id = action.id
            const deleteCategory = async () => {
                const res = await ApiCategory.delete({ id });
                console.log(res);
            }
            deleteCategory();
            break;
        default:

    }
}

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
export const ButtonSmall = ({ content, color, onAction }) => {
    return (
        <button className="text-base text-white px-[15px] py-[9px] rounded-lg hover:-translate-y-0.5 transition-all ease-in-out active:translate-y-0.5 mr-[20px]" style={{ backgroundColor: color }}>{content}</button>
    );
}

export const ButtonMedium = ({ content, color, onAction }) => {


    return (
        <button onClick={() => { handlerAction(onAction) }} className="text-base text-white px-10 py-5 rounded-lg hover:-translate-y-0.5 transition-all ease-in-out active:translate-y-0.5 mr-[20px]" style={{ backgroundColor: color }}>{content}</button>
    );
}
export const ButtonLarge = ({ content, color, onAction }) => {


    return (
        <button className="text-base text-white px-16 py-5 rounded-lg hover:-translate-y-0.5 transition-all ease-in-out active:translate-y-0.5 mr-[20px]" style={{ backgroundColor: color }}>{content}</button>
    );
}

export default memo(Button)