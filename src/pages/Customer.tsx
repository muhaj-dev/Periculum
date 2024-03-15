// import { CiUser } from "react-icons/ci";
import { CustTable } from "../components/Customer/CustTable";
import HomeLayout from "../layout/HomeLayout";
import { BankProfile } from "../components/Customer/BankProfile";


export const Customer = () => {
  return (
    <HomeLayout>
     
      <div className="">
        <CustTable />
      </div>
      <div className="overflow-x-scroll">
        <BankProfile />
      </div>
    </HomeLayout>
  );
};
