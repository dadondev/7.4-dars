import { Outlet } from "react-router-dom";
import Form from "../components/form/Form";

const Main = () => {
  return (
    <>
      <main className="h-full p-2">
        <Outlet />
        <div></div>
        <dialog
          id="addRequest"
          className="max-w-[300px] rounded-lg w-full h-auto max-h-[215px] bg-white py-3 px-4"
        >
          <h1 className="text-center text-xl">Add Request</h1>
          <Form />
        </dialog>
      </main>
    </>
  );
};

export default Main;
