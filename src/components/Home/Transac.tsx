import React from "react";


export const Transac = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between  gap-5 my-10 text-white w-full">
      <div className=" w-full py-6 px-8 basis-full lg:basis-5/12 bg-blue-700">
        <p className="text-[1.5rem] font-semibold -mb-1">Average Age</p>
        <p>(in years)</p>
        <ul className="mt-5 flex justify-between gap-2 ">
          <li>
            <p className="-mb-1 text-sm">The Agric Client</p>
            <p className="font-semibold text-[2rem]">23</p>
          </li>
          <li>
            <p className="-mb-1 text-sm">The Agric Client</p>
            <p className="font-semibold text-[2rem]">23</p>
          </li>
          <li>
            <p className="-mb-1 text-sm">The Agric Client</p>
            <p className="font-semibold text-[2rem]">23</p>
          </li>
          <li>
            <p className="-mb-1 text-sm">The Agric Client</p>
            <p className="font-semibold text-[2rem]">23</p>
          </li>
        </ul>
      </div>

      <div className=" w-full py-6 px-8 basis-full lg:basis-7/12 bg-blue-500">
        <p className="text-[1.5rem] font-semibold -mb-1">Average Transaction Value</p>
        <p>(Credit)</p>
        <ul className="mt-5 flex justify-between gap-2 ">
          <li>
            <p className="-mb-1 text-sm">The Agric Client</p>
            <p className="font-semibold text-[2rem]">₦ 6,587</p>
          </li>
          <li>
            <p className="-mb-1 text-sm">The Agric Client</p>
            <p className="font-semibold text-[2rem]">₦ 6,587</p>
          </li>
          <li>
            <p className="-mb-1 text-sm">The Agric Client</p>
            <p className="font-semibold text-[2rem]">₦ 6,587</p>
          </li>
          <li>
            <p className="-mb-1 text-sm">The Agric Client</p>
            <p className="font-semibold text-[2rem]">₦ 6,587</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

