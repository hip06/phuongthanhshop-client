import icons from "./icons";
import image from "./image"

const { BsSpeedometer2, RiProductHuntLine, FaUserEdit, IoIosCreate } = icons;

export const path = {
  LOGIN: "/login",
  SYSTEM: "/system/*",
  USERCLIENT:'/user',
  HOME: "/home/*",
  PAYMENT:'/payment',
  FEED: "/feed",
  CART:'/cart',
  GENERAL: "*",
  EDIT_PRODUCT: "edit-product",
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
    path: "/system/edit-product",
    icon: <IoIosCreate size={24} />,
  },
  {
    name: "Thêm gian hàng",
    path: "/system/create-category",
    icon: <IoIosCreate size={24} />,
  },
];

export const getSite = (params) => {
  const site = {
    color: "",
    banner: "",
    naviLeft: "",
    naviLeftText: "",
    naviLeftImage: '',
    linkLeft: '',
    naviRight: "",
    naviRightText: "",
    naviRightImage: '',
    linkRight: '',
  };
  if (params["*"] === "fashion") {
    site.color = "#3f9df3";
    site.banner = image.fashionbanner;
    site.naviLeftText = "Đồ gia dụng";
    site.linkLeft = "appliance";
    site.naviLeftImage = image.navigro1;
    site.naviRightText = "Tạp hóa";
    site.linkRight = 'grocery'
    site.naviRightImage = image.naviapp1;
  } else if (params["*"] === "appliance") {
    site.color = "#EF7300";
    site.banner = image.appliancebanner;
    site.naviLeftText = "Tạp hóa";
    site.linkLeft = 'grocery';
    site.naviLeftImage = image.navigro2;
    site.naviRightText = "Thời trang";
    site.linkRight = 'fashion'
    site.naviRightImage = image.navifashion2;
  } else {
    site.color = "#10C600";
    site.banner = image.grocerybanner;
    site.naviLeftText = "Đồ gia dụng";
    site.linkLeft = 'appliance'
    site.naviLeftImage = image.naviapp3;
    site.naviRightText = "Thời trang";
    site.linkRight = 'fashion';
    site.naviRightImage = image.navifashion3;
  }

  return site;
}
