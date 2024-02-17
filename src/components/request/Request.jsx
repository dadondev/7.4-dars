import React from "react";
import { useDispatch } from "react-redux";
import appSlice from "../../redux/appSlice";
import { useNavigate } from "react-router-dom";

const Request = ({ id, type, requestName }) => {
  const dispatch = useDispatch();
  const params = useNavigate();
  const handleClick = () => {
    params(`/${id}`);
  };
  return (
    <div
      className="bg-white card-main px-2 py-2 flex justify-between items-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <span className="text-orange-400 text-xs uppercase font-bold">
          {type}
        </span>
        <span className="text-black text-sm capitalize">{requestName}</span>
      </div>
      <svg
        onClick={() => {
          dispatch(appSlice.actions.filterRequests(id));
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 close-btn cursor-pointer text-red-500 hidden"
      >
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
      </svg>
    </div>
  );
};

export default Request;
