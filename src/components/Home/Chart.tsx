import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface Data {
  name: string;
  value: number;
  color: string;
}

const Chart: React.FC = () => {
  const data: Data[] = [
    { name: 'The Retail Techs', value: 461261, color: '#0088FE' },
    { name: 'Agric Clients', value: 336602, color: '#00C49F' },
    { name: 'The Micro Techs', value: 291843, color: '#FFBB28' },
    { name: 'The Loyalists', value: 23326, color: '#FF8042' },
    { name: 'The Corporates', value: 30007, color: '#82ca9d' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#EE4565'];

  return (
    <div className="flex py-16 px-10 w-[48%] gap-6 bg-white">
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={150} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="h-fit bg-red w-fit m-auto">
        {data.map((item) => (
          <ul key={item.value} className='flex flex-col gap-4'>
            <li className='flex gap-3 items-center text-gray-400'>
              <span
                style={{
                  backgroundColor: item.color,
                  height: '10px',
                  width: '10px',
                  padding: '6px',
                  borderRadius: '10px'
               }}
              ></span>
              {item.name} <span className='text-black font-bold '>{item.value}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Chart;