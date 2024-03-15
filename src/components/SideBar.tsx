import { CiHome } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-white min-h-[93dvh] max-h-[100dvh] ">
      <div className="flex flex-col gap-7 mx-auto w-fit pt-16">
        <Link to="/">
          <CiHome size={30} className="font-bold text-gray-500 hover:text-blue-500" />
        </Link>
        <Link to="/customer">
          <CgNotes size={30} className="text-gray-500 hover:text-blue-500" />
        </Link>
      </div>
    </div>
  );
}
