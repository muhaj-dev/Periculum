
import { FiSettings } from "react-icons/fi";

export default function NavBar() {
  return (
    <div className="bg-blue-500 text-white">
      <div className="flex justify-between w-[95%] mx-auto py-6">
        <p className="font-bold text-2xl">CREDIT CHART</p>
        <FiSettings size={30} />
      </div>
    </div>
  )
}
