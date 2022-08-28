import icons from "./icons";

const { BsSpeedometer2, RiProductHuntLine, FaUserEdit, IoIosCreate } = icons;

export const path = {
  LOGIN: "/login",
  SYSTEM: "/system/*",
  HOME: "/home",
  FEED: "*",
  GENERAL: "*",
  CREATE_PRODUCT: "create-product",
  MANAGE_PRODUCT: "manage-product",
  MANAGE_CATEGORY: "manage-category",
  USER: "user",
  BILL: "bill",
  CREATE_CATEGORY: "create-category",
};
export const adminMenu = [
  {
    name: "Tổng sản phẩm",
    path: "/system/",
    icon: <BsSpeedometer2 size={24} />,
  },
  {
    name: "Sản phẩm",
    path: "/system/manage-product",
    icon: <RiProductHuntLine size={24} />,
  },
  {
    name: "Người dùng",
    path: "/system/user",
    icon: <RiProductHuntLine size={24} />,
  },
  {
    name: "Hóa đơn",
    path: "/system/bill",
    icon: <RiProductHuntLine size={24} />,
  },
  {
    name: "Quản lý gian hàng",
    path: "/system/manage-category",
    icon: <RiProductHuntLine size={24} />,
  },
  { name: "Thống kê", path: "", icon: <RiProductHuntLine size={24} /> },
  // { name: 'Quản lý thành viên', path: '/system/manage-user', icon: <FaUserEdit size={24} /> },
  {
    name: "Thêm sản phẩm",
    path: "/system/create-product",
    icon: <IoIosCreate size={24} />,
  },
  {
    name: "Thêm gian hàng",
    path: "/system/create-category",
    icon: <IoIosCreate size={24} />,
  },
];
