import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import appSlice from "./redux/appSlice";
import Method from "./pages/Method";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div className="h-full grid grid-cols-[1fr_10fr] md:grid-cols-[2fr_7fr]">
        <Sidebar />
        <Main />
      </div>
    ),
    children: [
      {
        path: ":id",
        element: <Method />,
      },
    ],
  },
]);

const Root = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default Root;
