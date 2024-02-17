import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import appSlice from "../../redux/appSlice";

const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const selectRef = useRef();
  const handleSubmit = () => {
    if (inputRef.current.value && selectRef.current.value) {
      dispatch(
        appSlice.actions.newRequest({
          id: Math.ceil(Math.random() * 10000),
          type: selectRef.current.value,
          requestName: inputRef.current.value,
        })
      );
      document.getElementById("addRequest").close();
    }
  };
  return (
    <form
      className="w-full py-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <select
        ref={selectRef}
        id="selectType"
        className="capitalize outline-none rounded-md focus:outline-cyan-400 mb-3 w-full outline-none focus:outline-none bg-slate-100 px-3 py-2"
      >
        <option value="get">get</option>
        <option value="post">post</option>
        <option value="put">put</option>
        <option value="delete">delete</option>
      </select>
      <input
        ref={inputRef}
        type="text"
        className="mb-3 w-full py-2 px-3 bg-slate-100 focus:outline-cyan-400 rounded-md"
        placeholder="Request name"
      />
      <button className="py-2 bg-cyan-500 block px-3 mx-auto text-white rounded-md">
        Add request
      </button>
    </form>
  );
};

export default Form;
