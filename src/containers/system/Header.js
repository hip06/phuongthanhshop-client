import React from "react";
import icons from "../../ultils/icons";
import avatar from "../../assets/avatar-anon.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { apiGetCurrent } from "../../apis/user";
import { bufferToBase64 } from "../../ultils/common";
const { FiMenu } = icons;

const Header = ({ setIsShowSidebar }) => {
  const userCurrent = useSelector((state) => state.auth.userCurrent);
  return (
    <div className="w-full h-[64px] bg-white text-gray-500 flex items-center justify-between shadow-md px-3">
      <div
        className="cursor-pointer"
        onClick={() => setIsShowSidebar((prev) => !prev)}
      >
        <FiMenu size={24} />
      </div>
      <div className="flex gap-2 items-center">
        <small>Xin chào, {userCurrent?.name}</small>
        <img
          src={
            bufferToBase64(userCurrent?.avatar) ||
            userCurrent?.avatarUrl ||
            avatar
          }
          alt="avatar"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
