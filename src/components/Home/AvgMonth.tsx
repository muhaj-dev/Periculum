const items = [
  {
    name: "The Agric Client",
    value: 6587,
  },
  {
    name: "The Agric Client",
    value: 6587,
  },
  {
    name: "The Agric Client",
    value: 6587,
  },
  {
    name: "The Agric Client",
    value: 6587,
  },
];
export default function AvgMonth() {
  return (
    <div>
      <p className="text-gray-700 pb-5 font-bold text-[1.6rem]">
        AVERAGE MONTHLY BALANCE
      </p>
      <div className=" w-full  px-8 bg-white">
        <ul className="mt-5 flex justify-between gap-2 ">
          {items.map((item, index) => (
            <li key={index} className="py-8 w-[24%] border-r-2 border-blue-600 ">
              <p className="-mb-1 text-lg pb-2 font-semibold">{item.name}</p>
              <p className="font-bold text-[2.4rem]">₦ {item.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
