import React, { useState } from "react";

const Title = () => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
  };

  return (
    <div className="flex w-full justify-between items-center relative">
      <h1 className="text-xl">Collections</h1>
      <button
        className="py-0 px-2 transition-all hover:bg-white rounded-md"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path>
        </svg>
      </button>

      <ul
        className={
          hidden
            ? "block absolute right-2 top-10 text-sm p-2 rounded-xl bg-white"
            : "hidden"
        }
        onClick={() => {
          setHidden(false);
        }}
      >
        <button
          className="px-2 py-2 rounded-xl bg-slate-50"
          onClick={() => {
            document.getElementById("addRequest").showModal();
          }}
        >
          Add requests
        </button>
      </ul>
    </div>
  );
};

export default Title;
