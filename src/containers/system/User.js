import { Button } from "../../components/Button";
import image from "../../assets/temp.png";
import { FiSearch } from "react-icons/fi";
import { InputCustomWidth } from "../../components/InputCtWidth";
const User = () => {
  const tempUser = [
    {
      avata: "",
      name: "Nguyen Van A",
      phone: "01234567789",
      email: "longn03@gmail.com",
    },
    {
      avata: "",
      name: "Nguyen Van A",
      phone: "01234567789",
      email: "longn03@gmail.com",
    },
    {
      avata: "",
      name: "Nguyen Van A",
      phone: "01234567789",
      email: "longn03@gmail.com",
    },
  ];

  const renderUser = tempUser.map((user, i) => (
    <div
      key={i}
      className="flex rounded w-full bg-white items-center h-[90px] [&:not(:first-child)]:mt-2"
    >
      <div className="w-[5%] text-center">
        <p>{i + 1}</p>
      </div>

      <div className="w-[15%] flex justify-center">
        <img src={image} className=""></img>
      </div>
      <div className="w-[20%] text-center">
        <p>{user.name}</p>
      </div>
      <div className="w-[20%] text-center">
        <p>{user.phone}</p>
      </div>

      <div className="w-[30%] text-center">
        <p>{user.email}</p>
      </div>
      <div className="w-[30%] flex justify-around">
        <Button
          text="Sửa"
          bgColor="#4ed14b"
          textColor="#fff"
          width="2/5"
        ></Button>
        <Button
          text="Xóa"
          bgColor="#cf2b2b"
          textColor="#fff"
          width="2/5"
          height="2"
        ></Button>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className="text-3xl">Quản lí người dùng</h1>

      <div className="bg-[#d9d9d9] h-[64px] flex items-center justify-end rounded-xl py-3 px-5">
        <InputCustomWidth widthP={"full"} />

        <FiSearch className="ml-2 cursor-pointer text-2xl hover:text-gray-500" />
      </div>

      <div className="bg-[#d9d9d9] p-[10px] mt-[20px] rounded-xl">
        <div className="flex">
          <div className="w-[5%]  font-bold text-center">ID</div>
          <div className="w-[15%] font-bold text-center">Ảnh đại diện</div>
          <div className="w-[20%]  font-bold text-center">Tên người dùng</div>
          <div className="w-[20%]  font-bold text-center">Số điện thoại</div>
          <div className="w-[20%]  font-bold text-center">Email</div>
        </div>
        {renderUser}
      </div>
    </div>
  );
};

export default User;
