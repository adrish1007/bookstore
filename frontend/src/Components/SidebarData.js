import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/Box",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/About",
    icon: <IoIcons.IoMdPeople/>,
    cName: "nav-text",
  },
  {
    title: "Cart",
    path: "/Cart",
    icon: <FaIcons.FaEnvelopeOpenText/>,
    cName: "nav-text",
  },
  {
    title: "FAQ",
    path: "/Services",
    icon: <IoIcons.IoMdHelpCircle/>,
    cName: "nav-text",
  }
];