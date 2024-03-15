import React from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "SP",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "F&E",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "EE",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "E + E",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "EDUCATION",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const name = [
    { name: 'The Retail Techs' },
    { name: 'Agric Clients' },
    { name: 'The Micro Techs' },
    { name: 'The Loyalists' },
    { name: 'The Corporates' }
  ];

  const pillar = [
    { name: 'Social Protection (SP)', color: '#0088FE' },
    { name: 'Education and Leadership Development (Education)', color: '#00C49F' },
    { name: 'Energy & Environment (EE)', color: '#FFBB28' },
    { name: 'Enterprise development & Financial inclusion (E + E)', color: '#FF8042' },
    { name: 'Food & Agriculture (F&E)', color: '#EE4565' }
  ];


export default function Pillar() {
  return (
    <div className="my-8">
      <p className="text-gray-700 pb-3 font-bold text-[1.6rem]">
        PILLAR DISTRIBUTE
      </p>
      <ul className='mx-auto w-[96%] mb-5 flex flex-wrap gap-4'>
      {pillar.map((item) => (
            <li key={item.name}  className='flex gap-3 items-center text-black text-[1.12rem] font-semibold'>
              <span
                style={{
                  backgroundColor: item.color,
                  height: '10px',
                  width: '10px',
                  padding: '6px',
                  borderRadius: '10px'
               }}
              ></span>
              {item.name}
            </li>
        ))}
        </ul>
        <div className="flex gap-2 flex-wrap">
        {name.map((item) => (

        <div key={item.name} className="w-[500px] bg-white p-3">
            <p className="bg-blue-700 text-white text-center font-semibold text-2xl py-3">
            {item.name}
            </p>

            <div className="w-fit  py-6 px-8 flex  mx-auto  overflow-x-auto">
            <BarChart
                width={460}
                height={300}
                data={data}
                barSize={10}
                margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 0" />
                <Tooltip />
                <Bar dataKey="pv" fill="#FB7D5B" />
                {/* <Bar dataKey="uv" fill="#FB7D5B" /> */}
            </BarChart>
            </div>
        </div>
        ))}

        </div>
    </div>
  );
}
