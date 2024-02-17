import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import appSlice from "../redux/appSlice";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Method = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const request = dispatch(appSlice.actions.getSingleRequest(id));
  return (
    <div className="h-full grid grid-rows-[3fr_5fr] overflow-hidden">
      <div className="w-full p-2 md:px-10 md:py-6 grid grid-rows-[1fr_3fr] gap-10">
        <form className="w-full mx-auto max-w-[1200px] grid grid-cols-[1fr_100px]">
          <input
            type="text"
            className="py-3 px-4 outline-none border-sky-400 focus:border-cyan-500 border-[2px] focus:outline-none rounded-l-sm"
            placeholder="Paste link..."
          />
          <button className="bg-sky-400 text-white">Send</button>
        </form>
        <div>
          <textarea
            type="text"
            className="border-[2px] border-sky-500 outline-none p-2 h-full  w-full"
          />
        </div>
      </div>
      <div>
        <div className="max-w-[940px] mx-auto h-full">
          <SyntaxHighlighter language="json" style={docco}>
            {}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Method;
