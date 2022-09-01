import React, { useCallback, useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import Button from "./Button";

/* Input field Which can custom width
    WidthP : value of width
    PLarge : large or small padding
    @Anhtd
*/
const InputCustomWidth = React.memo(
  ({ lable, widthP, placeholder, PLarge, value, setValue }) => {
    const onAction = useCallback((newvalue) => setValue(newvalue), []);
    return (
      <div className={`w-${widthP}  h-full`}>
        <label htmlFor="field" className="font-bold text-l">
          {lable}
        </label>

        <input
          className={`focus:ring-indigo-500 
                focus:border-indigo-500 block 
                w-full ${PLarge ? "pl-7 pr-12" : "pl-2 pr-2"} sm:text-sm 
                border-gray-300 rounded-md ${lable ? "h-1/2" : "h-full"}
                 `}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onAction(e.target.value)}
        />
      </div>
    );
  }
);

/* Select field Which can custom width
    WidthP : value of width
    @Anhtd
*/
const SelectCustomWidth = React.memo(
  ({ options, lable, widthP, selectValue, setSelectValue }) => {
    const onAction = useCallback((newValue) => {
      setSelectValue(newValue);
    }, []);
    return (
      <div className={`w-${widthP} h-full`}>
        <label htmlFor="field" className="font-bold text-l">
          {lable}
        </label>
        <div
          className={`flex items-center w-full ${lable ? "h-1/2" : "h-full"}`}
        >
          <select
            className="mr-3 w-[90%] focus:ring-indigo-500 
                focus:border-indigo-500 block w-full pl-2 pr-2 sm:text-sm 
                border-gray-300 rounded-md h-full"
            onChange={(e) => onAction(e.target.value)}
            defaultValue={selectValue}
          >
            {options.length !== 0 ? (
              options.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })
            ) : (
              <option value="null">Chưa có lựa chọn</option>
            )}
          </select>
          <BiSortAlt2 className="text-2xl" />
        </div>
      </div>
    );
  }
);

/* HashTag field Which can custom width
    WidthP : value of width
    @Anhtd
*/
const HashTagCustomWidth = React.memo(
  ({ lable, widthP, placeholder, tags, setTags }) => {
    const [value, setValue] = useState("");
    const onAction = useCallback((newValue) => {
      setValue(newValue);
    }, []);
    const handleAction = () => {
      if (value === "") return;
      let newHashTag = `#${value.replace(/ /g, "_")}`;
      setTags([...tags, newHashTag]);
      setValue("");
    };
    const handleKeyCode = (e) => {
      if (e.keyCode === 13) handleAction();
    };
    const handleClear = () => {
      setTags([]);
    };
    return (
      <div className={`w-${widthP} h-[120%]`}>
        <label htmlFor="field" className="font-bold text-l">
          {lable}
        </label>
        <div className="flex h-[42%]">
          <input
            className="focus:ring-indigo-500 
                focus:border-indigo-500 block 
                w-full pl-2 pr-2 sm:text-sm 
                border-gray-300 rounded-md
                h-full mr-[12px]"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onAction(e.target.value)}
            onKeyDown={(e) => handleKeyCode(e)}
          />
          <Button
            text="Sửa"
            bgColor="#4ed14b"
            textColor="#fff"
            width="40%"
            onClick={handleAction}
          ></Button>
          <Button
            text="Xóa"
            bgColor="#cf2b2b"
            textColor="#fff"
            width="40%"
            onClick={handleClear}
          ></Button>
        </div>
        <div className="flex flex-wrap">
          {tags.length !== 0 ? (
            tags.map((tag, index) => {
              return (
                <div
                  className="text-sm
                                    items-center bg-[#fff] rounded
                                    my-2 mr-2"
                >
                  {tag}
                </div>
              );
            })
          ) : (
            <div
              className="text-sm
                        items-center bg-[#fff] rounded
                        my-2 mr-2"
            >
              #hash_tag_here
            </div>
          )}
        </div>
      </div>
    );
  }
);

/* Text field Which can custom width
    WidthP : value of width
    PLarge : large or small padding
    @Anhtd
*/
const TextCustomWidth = React.memo(({ lable, widthP, placeholder }) => {
  const [value, setValue] = useState("");
  const onAction = useCallback((newvalue) => setValue(newvalue), []);
  return (
    <div className={`w-${widthP} my-3`}>
      <label htmlFor="field" className="font-bold text-l">
        {lable}
      </label>
      <textarea
        className="mr-3 w-[100%] h-[80px] focus:ring-indigo-500 
                focus:border-indigo-500 block w-full pl-2 pr-2 sm:text-sm 
                border-gray-300 rounded-md "
        value={value}
        placeholder={placeholder}
        onChange={(e) => onAction(e.target.value)}
      />
    </div>
  );
});

/* Input files field Which can custom width
    WidthP : value of width
    PLarge : large or small padding
    @Anhtd
*/
const InputFileCustomWidth = React.memo(({ lable, widthP, setValueImg, valueImg }) => {
  const onAction = useCallback((e) => {
    setValueImg(e.target.files[0])
  }, [])
  return (
    <div className={`w-${widthP} my-3`}>
      <label htmlFor="field" className="font-bold text-l">
        {lable}
      </label>
      <input
        type="file"
        className="mr-3 w-[100%] h-full focus:ring-indigo-500 
                focus:border-indigo-500 block w-full pl-2 pr-2 sm:text-sm 
                border-gray-300 rounded-md"
        onChange={onAction}
      />
    </div>
  );
});

export {
  InputCustomWidth,
  SelectCustomWidth,
  HashTagCustomWidth,
  TextCustomWidth,
  InputFileCustomWidth,
};
