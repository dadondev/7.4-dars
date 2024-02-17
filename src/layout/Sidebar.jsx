import React from "react";
import Title from "../components/titles/Title";
import { useSelector } from "react-redux";
import Request from "../components/request/Request";

const Sidebar = () => {
  const requests = useSelector((requests) => requests.datas);
  return (
    <div className="p-2 bg-slate-100">
      <Title />
      <div className="mt-2 flex flex-col gap-2">
        {requests &&
          requests.map((request, i) => <Request {...request} key={i} />)}
      </div>
    </div>
  );
};

export default Sidebar;
