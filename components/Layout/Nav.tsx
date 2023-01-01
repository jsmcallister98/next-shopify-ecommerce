import Link from "next/link";
import { useContext, useState } from "react";
import MiniCart from "../MiniCart";
import MobileNav from "./MobileNav";
import MobileMiniCart from "../MobileMiniCart";
import { motion } from "framer-motion";
import { CartContext } from "@context/shopContext";
import { Hashicon } from "@emeraldpay/hashicon-react";
import { useScrollPosition } from "@utils/hooks";
import { classNames } from "@utils/helpers";

const DesktopNav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart?.map((item: any) => {
    return (cartQuantity += item?.variantQuantity);
  });

  const { scrollPosition } = useScrollPosition();

  return (
    <div
      className={classNames(
        scrollPosition === 0 ? "bg-transparent shadow-none" : "",
        "fixed top-0 z-50 hidden h-20 w-full max-w-[100vw] items-center justify-between bg-white bg-opacity-50 shadow backdrop-blur backdrop-filter transition-colors duration-500 ease-in-out dark:bg-transparent dark:bg-opacity-75 md:flex"
      )}
    >
      <div className="m-auto w-full max-w-[100rem] items-center justify-between md:flex">
        <div className="flex items-center">
          <Link legacyBehavior href="/" passHref>
            <a className="cursor-pointer pl-10 pr-4">
              <span className="pt-1 text-lg font-bold">McAllister</span>
            </a>
          </Link>
          {/* <div className="mt-2 p-5">
            <ThemeToggle />
          </div> */}
        </div>
        <motion.div className="flex justify-center px-10">
          <MenuItem text={"Collections"} space={"-left-2/4"}>
            <SubItem
              title="McGolf"
              text="Are you McSlice, McHook, or McScratch?"
            />
            <SubItem
              title="Swang"
              text="Beautiful designs, beautiful shot shapes"
            />
            <SubItem
              title="OnCourse"
              text="Relaxed vibes to game on the course"
            />
          </MenuItem>
          <MenuItem
            text={"Products"}
            space={"-right-full"}
            style={{ minWidth: 400 }}
          >
            <SubItem title="Hoodies" text="Stay warm and look cool" />
            <SubItem
              title="Sweaters"
              text="Cozy and casual long sleeve sweaters"
            />
            <SubItem
              title="Tees"
              text="Short sleeve necessities for warm days"
            />
            <SubItem
              title="Hats"
              text="Golfers just look weird without hats, you know?"
            />
          </MenuItem>
          <MenuItem
            text={"About"}
            space={"-left-3/4"}
            style={{ minWidth: 400 }}
          >
            <SubItem title="The Team" text="Get to know us better" />
            <SubItem
              title="Our Mission"
              text="Provide the best casual golf wear"
            />
            <SubItem
              title="Contact Us"
              text="Keep us in the loop about how we are doing"
            />
          </MenuItem>
        </motion.div>
        <button
          className="text-md cursor-pointer px-10 text-center font-bold"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart ({cartQuantity})
        </button>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <MobileMiniCart />
    </>
  );
};

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Underline = () => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-slate-300 to-slate-400"
    layoutId="underline"
    layout
  >
    {/* <div className="rotate-45 w-5 h-5 bg-white absolute z-50 border-t border-l top-3"></div> */}
  </motion.div>
);

const MenuItem = ({ text, space, children, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative h-6 px-10"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
      onFocus={() => setIsBeingHovered(true)}
      onBlur={() => setIsBeingHovered(false)}
    >
      <Link href={`/${text.toLowerCase()}`} className="relative">
        {text}
        {isBeingHovered ? <Underline /> : null}
      </Link>
      {isBeingHovered ? (
        <div className="-mx-10 min-w-max py-5">
          <motion.div
            {...props}
            layoutId="menu"
            className={`absolute rounded-lg bg-white py-5 px-8 shadow-lg dark:bg-slate-700 dark:shadow-md dark:shadow-slate-400 ${space}`}
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      ) : null}
    </motion.div>
  );
};

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const SubItem = ({ title, text }: any) => {
  return (
    <motion.div
      className="group my-2 min-w-max cursor-pointer"
      layout
      variants={SubItemVariants}
    >
      <Link href={`/${title.toLowerCase()}`}>
        <div className="flex items-center gap-4">
          <Hashicon value={title} size={25} />
          <div className="">
            <p className="text-md font-bold text-gray-800 group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-300">
              {title}
            </p>
            <span className="text-sm text-gray-400 group-hover:text-blue-400 dark:text-gray-200">
              {text}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Nav;
