import React, { useState } from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";

import { IoIosCheckboxOutline } from "react-icons/io";
import { CiSquareRemove, CiUser } from "react-icons/ci";
import Pagination from "./Pagination";
import { TableData } from "../Data";

interface TableData {
  name: string;
  id: string;
  cat: string;
  period: string;
  status: string;
}

export const CustTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [customers, setCustomers] = useState<TableData[]>(TableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"Existing" | "New">(
    "Existing"
  );
  const [newCustomerId, setNewCustomerId] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const filteredCustomers = React.useMemo(() => {
    return searchText
      ? customers.filter((customer) =>
          customer.id.toLowerCase().includes(searchText.toLowerCase())
        )
      : customers;
  }, [customers, searchText]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredCustomers.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(event.target.value as "Existing" | "New");
    setNewCustomerId("");
  };

  const handleAddCustomer = () => {
    if (
      !newCustomerId ||
      customers.find((customer) => customer.id === newCustomerId)
    ) {
      alert("Please enter a valid and unique customer ID.");
      return;
    }

    const newCustomer = {
      name: "New Customer",
      id: newCustomerId,
      cat: "CORPORATES",
      period: "NOV 2020-MAY 2021",
      status: "active",
    };

    setCustomers([...customers, newCustomer]);
    setNewCustomerId("");
    setSuccessMessage(true);
    onOpen()
  };

  return (
    <div>
      <p className="text-3xl font-bold mb-5">All Customers </p>
      <div>
        <div className="relative flex gap-3 my-7">
          <Menu>
            <MenuButton
              as={Button}
              bg="transparent"
              borderRadius="0"
              py={6}
              w="fit-content"
            >
              <div className="relative -left-4 flex gap-3 my-7">
                <CiUser
                  className="absolute top-3 left-2 text-blue-500"
                  size={25}
                />
                <p className="text-gray-400  bg-white py-4 px-5 my-auto pl-10 text-[1.1rem]">
                  Sergent Customer
                </p>

                <button className="py-3 px-5 ml-4 border-2 bg-blue-300 bg-opacity-45 text-blue-500">
                  Clear
                </button>
              </div>
            </MenuButton>
            <MenuList>
              <div className="flex flex-col gap-2 px-3 py-4 w-[350px]">
                <label className="text-[16px] font-semibold -mb-1">
                  {selectedFilter === "Existing"
                    ? "Customer ID"
                    : "New Customer ID"}
                </label>
                <input
                  className="p-2 border-[1.5px] outline-blue-500"
                  placeholder="Input ID"
                  type="text"
                  value={
                    selectedFilter === "Existing" ? searchText : newCustomerId
                  } // Set value based on filter
                  onChange={(event) => {
                    if (selectedFilter === "Existing") {
                      setSearchText(event.target.value);
                    } else {
                      setNewCustomerId(event.target.value);
                    }
                  }}
                />
                <div className="flex flex-col gap-2 mt-3">
                  <p className="text-[16px] font-semibold -mb-1">Select</p>
                  <div className="flex items-center gap-2">
                    <label>
                      <input
                        type="radio"
                        value="Existing"
                        checked={selectedFilter === "Existing"}
                        onChange={handleRadioChange}
                        className="mr-2"
                      />
                      Existing
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <label>
                      <input
                        type="radio"
                        value="New"
                        className="mr-2"
                        checked={selectedFilter === "New"}
                        onChange={handleRadioChange}
                      />
                      New
                    </label>
                  </div>
                  {/* this button should change when clicked on New and the text should be 'Add new customer' but if its 'Existing' it should show 'Search' and also to add new customer by id */}
                  <button
                    className={`py-2 px-5 rounded-lg border-[1.5px] mt-4 ${
                      selectedFilter === "New"
                        ? "bg-blue-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                    onClick={() => {
                      if (selectedFilter === "New") {
                        // Handle adding a new customer
                        handleAddCustomer();
                      } else {
                        // Handle searching

                        // You can add the search functionality here
                        // For now, you can just alert a message
                        alert("Search functionality is not implemented yet.");
                      }
                    }}
                  >
                    {selectedFilter === "New" ? "Add new customer" : "Search"}
                  </button>
                </div>
              </div>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="overflow-x-scroll">
        <table className="w-full text-center overflow-hidden">
          <thead className="text-2xl uppercase ">
            <tr className="flex">
              <th className="min-w-[250px] px-4 py-2 font-semibold border-0">
                Customer Name
              </th>
              <th className="w-[250px] px-4 py-2 font-semibold border-0">
                Customer ID
              </th>
              <th className="w-[250px] px-4 py-2 font-semibold border-0">
                Category
              </th>
              <th className="w-[250px] px-4 py-2 font-semibold border-0">
                Laon period
              </th>
              <th className="w-[250px] px-4 py-2 font-semibold border-0">
                status
              </th>
            </tr>
          </thead>
          <tbody className=" flex flex-col gap-4 space-y-1">
            {currentPosts.map((row, index) => (
              <tr key={index} className="flex bg-white my-4 py-4 text-left">
                <td className="px-10 py-2 min-w-[250px]">{row.name}</td>
                <td className="px-12 py-2 min-w-[250px]">{row.id}</td>
                <td
                  className={
                    row.cat === "AGRIC CLIENT"
                      ? " text-green-700 bg-green-500 font-semibold my-auto  bg-opacity-50 py-2 px-3 ml-16"
                      : row.cat === "CORPORATES"
                      ? "text-blue-800 bg-blue-800 font-semibold my-auto  bg-opacity-50 py-2 px-3 ml-16"
                      : row.cat === "LOYALIST"
                      ? "text-orange-500  bg-orange-500 font-semibold my-aut  bg-opacity-50 py-2 px-3 ml-16 mr-7"
                      : row.cat === "RETAIL TECHS"
                      ? "text-purple-500  bg-purple-500 font-semibold my-auto  bg-opacity-50 py-2 px-3 ml-16"
                      : "text-blue-500  bg-blue-300 font-semibold my-auto  bg-opacity-50 py-2 px-3 ml-16"
                  }
                >
                  {row.cat}
                </td>
                <td className=" pl-24 w-fit  py-2 min-w-[300px]">
                  {row.period}
                </td>
                <td
                  className={
                    row.status === "active"
                      ? "px-24 py-2 min-w-[250px] text-green-500 uppercase flex gap-2 items-center"
                      : "px-24 py-2 min-w-[250px]  text-red-500 uppercase flex gap-2 items-center"
                  }
                >
                  {row.status === "active" ? (
                    <IoIosCheckboxOutline />
                  ) : (
                    <CiSquareRemove />
                  )}{" "}
                  {row.status}
                </td>
              </tr>
            ))}

            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={customers?.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </tbody>
        </table>
      </div>

      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody textAlign={'center'} m={'10'}>
            <p className="text-blue-500 text-4xl font-bold">Payment Required</p>
            <p className=" my-3 text-lg font-semibold">This ID blong to a new customer</p>
            <p className=" text-lg font-semibold">You are required to pay <span className="text-4xl font-bold">₦350</span> to segment a new user</p>
          </ModalBody>
          <div className="w-fit mx-auto space-x-3">
          <button className="px-10 py-4 text-blue-500 font-semibold border-2"  onClick={onClose}>
              Cancle
            </button>
            <button className="px-10 py-4 text-white bg-blue-500 font-semibold border-2" onClick={(() => {
              paginate(customers.length -1)
              onClose()
            })}>Proceed</button>
          </div>

          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
