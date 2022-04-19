import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useDetectClickOutside } from "react-detect-click-outside";
import Dropdown from "./Dropdown";
import { setActiveDropdown } from "features/slices/uiSlice";

// icon's
import { TiStarOutline, TiStar, TiClipboard } from "react-icons/ti";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiMessageSquareAdd, BiFilterAlt } from "react-icons/bi";
import { RiUserSharedLine, RiSettings3Line } from "react-icons/ri";

import logo from "assets/images/logo.png";

const Toolbar = () => {
  return (
    <motion.nav
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
      className="p-3 shadow-md bg-lightBlack"
    >
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* right block item's */}
        <div className="flex space-x-2">
          {/* logo */}
          <img
            src={logo}
            alt="لوگو"
            className="px-3 py-2 w-28 h-9 rounded-sm"
          />
          {/* board name */}
          <section className="flex items-center">
            <ToolbarButton
              text="نام تخته"
              additionalClass="h-full font-vazirBold"
            />
            <span className="px-2 py-0 cursor-pointer h-full flex items-center rounded text-white mr-1 bg-lightWhite hover:text-yellow-500">
              <TiStarOutline size={18} />
            </span>
          </section>
          <ToolbarButton text="تخته ها" icon={TiClipboard} dropdown="boards" />
          <ToolbarButton text="افزودن لیست جدید" icon={BiMessageSquareAdd} />
          <ToolbarButton text="اشتراک گذاری" icon={RiUserSharedLine} />
        </div>

        {/* left block item's */}
        <div className="flex space-x-2">
          <ToolbarButton
            text="فیلتر ها"
            icon={BiFilterAlt}
            additionalClass="py-2"
          />
          <ToolbarButton
            text="تنظیمات"
            icon={RiSettings3Line}
            additionalClass="py-2"
          />
        </div>
      </div>
    </motion.nav>
  );
};

const ToolbarButton = ({ icon: Icon, text, additionalClass, dropdown }) => {
  const { activeDropdown } = useSelector((state) => state.uiState);
  const dispatch = useDispatch();

  const closeDropdown = () => dispatch(setActiveDropdown(null));

  const dropdownRef = useDetectClickOutside({
    onTriggered: closeDropdown,
  });

  return dropdown ? (
    // relative container
    <section className="relative flex items-center" ref={dropdownRef}>
      {/* dropdown button */}
      <span
        className={`toolbar-button py-2 ${
          additionalClass ? additionalClass : ""
        }`}
        data-dropdown={dropdown}
        onClick={(e) => dispatch(setActiveDropdown(e.currentTarget.dataset.dropdown))}
      >
        {Icon && <Icon size={18} className="ml-1" />}
        {text}
        <MdKeyboardArrowDown
          size={18}
          className={`mr-1 transition-all duration-200 ${
            activeDropdown === dropdown ? "rotate-180" : ""
          }`}
        />
      </span>
      {/* dropdown component */}
      {activeDropdown === dropdown && <Dropdown type="boards" />}
    </section>
  ) : (
    <span
      className={`toolbar-button ${additionalClass ? additionalClass : ""}`}
    >
      {Icon && <Icon size={18} className="ml-1" />}
      {text}
    </span>
  );
};

export default Toolbar;