import { useState, useRef } from "react";
import { useOnClickOutside } from "hooks/useClickOutside";

import deleteSoundEffect from "assets/audio/delete-sound-effect.mp3";

import { CgClose } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteTask = ({
  task,
  setActiveDropdown,
  btnText,
  headingText,
  callback,
  btnStyle,
  deleteIcon
}) => {
  const deleteBtnRef = useRef();
  const [showConfirm, setShowConfirm] = useState(false);
  useOnClickOutside(deleteBtnRef, () => {
    if (showConfirm) {
      setShowConfirm(false);
      setActiveDropdown(false);
    }
  });

  const fireCallback = () => {
    setShowConfirm(false);
    setActiveDropdown(false);
    callback();
    // play delete sound effect when delete task
    const audio = new Audio(deleteSoundEffect);
    audio.play();
  };

  return (
    <li
      className="relative flex items-center rounded-sm mb-2 text-sm"
      ref={deleteBtnRef}
    >
      <section
        className={btnStyle}
        onClick={() => {
          setShowConfirm(!showConfirm);
          setActiveDropdown(true);
        }}
      >
        {deleteIcon && <FaRegTrashAlt size={18} className="ml-2" />}
        <button>{btnText}</button>
      </section>
      {showConfirm && (
        <div className="absolute z-10 top-[120%] left-0 min-w-[250px] p-2 rounded shadow-md bg-white">
          <section className="flex items-center justify-between pb-1.5 border-b-2 border-light">
            <h6 className="text-sm text-black">{headingText}</h6>
            <CgClose
              size={15}
              className="cursor-pointer"
              onClick={() => {
                setShowConfirm(false);
                setActiveDropdown(false);
              }}
            />
          </section>
          <div className="mt-2">
            <p className="text-xs text-textColor">
              در صورت حذف امکان بازیابی وجود ندارد.
            </p>
            <button
              className="rounded shoadow text-white bg-red-600 w-full text-xs mt-2 py-1.5 hover:bg-red-700"
              onClick={fireCallback}
            >
              حذف
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default DeleteTask;