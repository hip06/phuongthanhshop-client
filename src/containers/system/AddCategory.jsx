import Button from "../../components/Button";
import { useState } from "react";
import ApiCategory from "../../apis/category";
const onSubmit = async (data) => {
  const res = await ApiCategory.post({ newCategory: data });
  console.log(res);
};
function AddCategory() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        name="newCategory"
        className=""
      />

      <button
        type="button"
        onClick={() => {
          onSubmit(value);
        }}
        className="h-[50px] w-[50px]"
      >
        Submit
      </button>
    </>
  );
}

export default AddCategory;
