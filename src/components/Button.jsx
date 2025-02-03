import { toast, ToastContainer } from "react-toastify";

export default function Button(props) {
  const { text, func } = props;

  return (
    <>
      <ToastContainer />
      <button
        onClick={
          (func,
          () => {
            toast.success("New workout generated!");
          })
        }
        className="mb-6 px-8 font-medium mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-600 border-solid 
        blueShadow duration-200"
      >
        <p>{text}</p>
      </button>
    </>
  );
}
