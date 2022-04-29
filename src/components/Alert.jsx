import { useDispatch, useSelector } from "react-redux";
import { setShowBackdrop, setAlertConfig } from "features/slices/uiSlice";

const Alert = () => {
  const dispatch = useDispatch();
  const { isActive, message, callBackName } = useSelector(
    (state) => state.uiState.alertConfig
  );

  const closeAlert = () => {
    dispatch(setShowBackdrop(false));
    dispatch(
      setAlertConfig({
        isActive: false,
        message: null,
        callBackName: null,
      })
    );
  };

  return (
    <div
      className={`fixed  top-[-50%]  z-50 left-[50%] translate-x-[-50%] rounded-b-lg shadow p-3 bg-white min-w-[450px] transition-all duration-300 ${
        isActive ? "top-[0] " : ""
      }`}
    >
      <p className="text-textColor">{message}</p>
      <section className="flex items-center gap-2 justify-end my-1">
        <button className="py-1 px-5 rounded shadow text-white transition-all duration-200 bg-green-600 hover:bg-green-700">
          تایید
        </button>
        <button
          className="py-1 px-5 rounded shadow text-white transition-all duration-200 bg-red-600 hover:bg-red-700"
          onClick={closeAlert}
        >
          لغو
        </button>
      </section>
    </div>
  );
};

export default Alert;
