import { useState } from "react";

const ListeCourses = () => {
  const [list, setList] = useState([34, 43, 5]);
  const [value, setValue] = useState("");

  const addNumber = () => {
    if (value !== "") {
      setList([...list, Number(value)]);
      setValue("");
    }
  };

  return (
    <>
      <p>{list.join(" ")}</p>

      <input
        type="number"
        value={value}
        placeholder="Add number"
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={addNumber}>Add number to the list</button>
    </>
  );
};

export default ListeCourses;
