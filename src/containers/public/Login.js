import React, { useState, useEffect } from "react";
import introVideo from "../../assets/intro.mp4";
import { InputField, Button, Loading } from "../../components";
import * as actions from "../../store/actions";
import { validateLogin } from "../../ultils/validate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    phone: "",
    password2: "",
    name: "",
  });
  const [isRegister, setIsRegister] = useState(location?.state?.flag);
  const [isPhone, setIsPhone] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const { isLoggedIn, msg } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    isLoggedIn &&
      setPayload({
        email: "",
        password: "",
        phone: "",
        password2: "",
        name: "",
      });
    isLoggedIn && navigate("/home/fashion");
  }, [isLoggedIn]);
  useEffect(() => {
    setIsLoading(false);
    msg && swal.fire("Oops!", msg, "error");
  }, [msg]);
  const handleSubmit = async () => {
    const isEmail = isPhone
      ? { phone: payload.phone }
      : { email: payload.email };
    const finalPayload = isRegister
      ? {
          ...isEmail,
          password: payload.password,
          password2: payload.password2,
          name: payload.name,
        }
      : {
          ...isEmail,
          password: payload.password,
        };
    let result = validateLogin(finalPayload, setInvalidFields, payload);
    if (result === 0) {
      setIsLoading(true);
      isRegister
        ? dispatch(actions.register(finalPayload))
        : dispatch(actions.login(finalPayload));
    }
  };
  return (
    <div className="w-full h-full relative">
      {isLoading && <Loading />}
      <video
        src={introVideo}
        muted
        autoPlay
        loop
        className="w-screen h-screen object-cover"
      ></video>
      <div className="overlay-layer absolute top-0 left-0 right-0 bottom-0 bg-overlay-80"></div>
      <div className="wrap-login absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col gap-7 justify-center items-center bg-transparent">
        <div className="box-login w-4/5 md:w-[500px]  bg-white rounded-md p-5 ">
          <h3 className="text-2xl font-semi w-full text-center py-5 pt-3">
            {!isRegister ? "????ng nh???p" : "????ng k?? t??i kho???n"}
          </h3>
          <div>
            {!isPhone && (
              <InputField
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
                label="EMAIL"
                value={payload.email}
                setValue={setPayload}
                type="email"
                typeInput="text"
              />
            )}
            {isPhone && (
              <InputField
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
                label="S??? ??I???N THO???I"
                value={payload.phone}
                setValue={setPayload}
                type="phone"
                typeInput="text"
              />
            )}
            {isRegister && (
              <InputField
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
                label="H??? T??N"
                value={payload.name}
                setValue={setPayload}
                type="name"
                typeInput="text"
              />
            )}
            <InputField
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              label="M???T KH???U"
              value={payload.password}
              setValue={setPayload}
              type="password"
              typeInput="text"
            />
            {isRegister && (
              <InputField
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
                label="NH???P L???I M???T KH???U"
                value={payload.password2}
                setValue={setPayload}
                type="password2"
                typeInput="text"
              />
            )}
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <Button
              text={!isRegister ? "????ng nh???p" : "????ng k??"}
              bgColor="bg-blue-700"
              textColor="text-white"
              fullWidth
              onClick={handleSubmit}
            />
            <small
              onClick={() => setIsPhone((prev) => !prev)}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              <span>{isRegister ? "????ng k?? b???ng " : "????ng nh???p b???ng "}</span>
              <span>{!isPhone ? "s??? ??i???n tho???i ?" : "email ?"}</span>
            </small>
            {!isRegister ? (
              <small>
                Ch??a c?? t??i kho???n ?{" "}
                <span
                  onClick={() => {
                    setIsRegister(true);
                    setPayload({
                      email: "",
                      password: "",
                      phone: "",
                      password2: "",
                      name: "",
                    });
                    setInvalidFields([]);
                  }}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  ????ng k?? ngay
                </span>
              </small>
            ) : (
              <small>
                ???? c?? t??i kho???n ?{" "}
                <span
                  onClick={() => {
                    setIsRegister(false);
                    setPayload({
                      email: "",
                      password: "",
                      phone: "",
                      password2: "",
                      name: "",
                    });
                    setInvalidFields([]);
                  }}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  ??i t???i ????ng nh???p
                </span>
              </small>
            )}
          </div>
        </div>
        <Link to={"/"} className="font-medium hover:underline text-white">
          B??? qua ????ng nh???p
        </Link>
      </div>
    </div>
  );
};

export default Login;
