const BoxVariants = ({
  variants,
  setPriceShowed,
  defautPrice,
  selectVariant,
  setSelectVariant,
}) => {
  const { name, value } = variants;
  return (
    <div key={variants.id} className="w-full flex my-[12px]">
      <div className="w-[20%]">{name}:</div>
      <div className="flex flex-wrap gap-4">
        {value.map((type) => {
          return (
            <div
              key={type.id}
              onClick={() => {
                setPriceShowed((defautPrice * type.price) / 100);
                setSelectVariant(type.type);
              }}
              className={` border-solid border-2 text-center cursor-pointer p-[8px] ${selectVariant===type.type?"border-[#ff424e]":""}`}
            >
              {type.type}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxVariants;
