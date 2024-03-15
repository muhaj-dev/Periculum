import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="flex bg-[#f6f6f6]">
        <div className="basis-[70px]">
        <SideBar />

        </div>
        <div  className="basis-full m-9 overflow-hidden">
            {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
