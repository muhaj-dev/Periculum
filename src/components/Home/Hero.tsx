import {
  Select,
  Menu,
  MenuButton,
  MenuList,
  Button,
} from "@chakra-ui/react";

import { LuCalendarDays } from "react-icons/lu";

export const Hero = () => {

  return (
    <div className="w-full">
      <div className="">
        <h1 className="font-bold text-2xl">Welcome to your Dashboard</h1>
      </div>

      <div className="flex justify-between mt-12">
        <Select
          placeholder="Segmentation Analysis"
          bg="white"
          w={"300px"}
          size="lg"
        >
          <option value="option1">Segmentation Analysis</option>
          <option value="option2">Customers' Profile</option>
        </Select>
        <Menu>
          <MenuButton
            as={Button}
            bg="#f6f6f6"
            border="2px"
            borderColor="blue.500"
          >
            <div className="flex justify-between gap-8">
              Loan Data Period
              <LuCalendarDays className="text-blue-500" />
            </div>
          </MenuButton>
          <MenuList>
            <div className="px-3 py-4">
              <p className="mb-3 font-semibold">Insert data range</p>

            <div className="flex flex-col gap-2">
                <label className="text-[14px] -mb-1">Start date</label>
                <input className="p-2 border-[1.5px]" placeholder="Input date" type="text" />
            </div>

            <div className="flex flex-col gap-2 mt-3">
                <label className="text-[14px] -mb-1">End date</label>
                <input className="p-2 border-[1.5px]" placeholder="Input date" type="text" />
            </div>
            <button className="py-2 px-5 rounded-lg border-[1.5px] mt-4">Done</button>
              
            </div>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};
