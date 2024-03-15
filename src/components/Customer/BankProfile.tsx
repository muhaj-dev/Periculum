import React from 'react'

export const BankProfile = () => {
  return (
    <div className='mt-12'>
        <p className="text-gray-700 pb-5 font-bold text-[1.4rem]">
        BANK PROFILE COMPARISON
      </p>
      <table className="w-full bg-white text-center overflow-hidden">
          <thead className="text-[1.3rem] uppercase  ">
            <tr className="flex border-b-2 border-blue-500">
              <th className="min-w-[250px] px-4 pt-4 font-semibold border-0">
                Customer 
              </th>
              <th className="w-[250px] px-4 pt-4 font-semibold border-0">
                Total number
              </th>
              <th className="w-[250px] px-4 pt-4 font-semibold border-0">
                transaction value
              </th>
              <th className="w-[250px] px-4 pt-4 font-semibold border-0">
                Laons taken
              </th>
              <th className="w-[250px] px-4 pt-4 font-semibold border-0">
                loans performance
              </th>
            </tr>
          </thead>
          <tbody className=" flex flex-col items-center text-md">
              <tr  className="flex text-left">
                <td className="pl-16 pt-4 min-w-[250px]">Egf bank customers</td>
                <td className="px-12 pt-4 min-w-[250px]">1,113,040 Customers</td>
                <td
                  className= " pt-4 pl-3 ml-3"
            
                >KES 124Bn
                </td>
                <td className=" pl-24 ml-24 w-fit  pt-4 min-w-[300px]">
                  20,000 Ksh
                </td>
                <td
                  className="pl-24  pt-4 min-w-[250px]"
                  
                >
                
                 <ul className='  h-fit list-disc'>
                    <li>94% Normal</li>
                    <li>1.85% Watch</li>
                    <li>4.17% NPL</li>
                 </ul>
                </td>
              </tr>

              <tr  className="flex bg-white  text-left">
                <td className="pl-16 pt-4 min-w-[250px]">Egf bank customers</td>
                <td className="px-12 pt-4 min-w-[250px]">1,113,040 Customers</td>
                <td
                  className= " pt-4 pl-3 ml-3"
            
                >KES 124Bn
                </td>
                <td className=" pl-24 ml-24 w-fit  pt-4 min-w-[300px]">
                  20,000 Ksh
                </td>
                <td
                  className="pl-24  pt-4 min-w-[250px]"
                  
                >
                
                 <ul className=' list-disc'>
                    <li>94% Normal</li>
                    <li>1.85% Watch</li>
                    <li>4.17% NPL</li>
                 </ul>
                </td>
              </tr>

           
          </tbody>
        </table>
    </div>
  )
}
