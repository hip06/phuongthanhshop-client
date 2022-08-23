import icons from "./icons"

const { BsSpeedometer2, RiProductHuntLine, FaUserEdit, IoIosCreate } = icons

export const path = {
    HOME: '/*',
    LOGIN: '/login',
    SYSTEM: '/system/*',
    FEED: '*',
    GENERAL: '*',
    CREATE_PRODUCT: 'create',
    MANAGE_PRODUCT: 'manage-product',
    MANAGE_CATEGORY: 'manage-category',
}
export const adminMenu = [
    { name: 'Dashboard', path: '/system/', icon: <BsSpeedometer2 size={24} /> },
    { name: 'Quản lý sản phẩm', path: '/system/manage-product', icon: <RiProductHuntLine size={24} /> },
    // { name: 'Quản lý thành viên', path: '/system/manage-user', icon: <FaUserEdit size={24} /> },
    { name: 'Thêm sản phẩm', path: '/system/create', icon: <IoIosCreate size={24} /> },
    { name: 'Quản lí gian hàng', path: '/system/manage-category', icon: <IoIosCreate size={24} /> },
]