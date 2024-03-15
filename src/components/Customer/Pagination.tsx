import React from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;
  const visiblePages = Math.min(5, totalPages);
  const windowSize = visiblePages;

  const halfWindowSize = Math.floor(windowSize / 2);
  const windowStart = Math.max(
    Math.min(currentPage - halfWindowSize, totalPages - windowSize) + 1,
    1
  );
  const windowEnd = Math.min(windowStart + windowSize - 1, totalPages);

  return (
    <div className=" bg-white flex justify-between items-center my-10">
      <div className="flex py-4 w-fit mx-auto">
        <nav className="mx-auto relative z-0 inline-flex gap-4 text-2xl" aria-label="Pagination">
          <button
           
            onClick={() => paginate(1)}

            disabled={currentPage <= 1}
            className={`relative inline-flex items-center ${currentPage <= 1 ? "opacity-40" : ""}`}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <button
           onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
            }
          }}
            disabled={currentPage <= 1}
            className={`relative inline-flex items-center ${currentPage <= 1 ? "opacity-40" : ""}`}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          <ul className="flex mx-auto">
            {windowStart === 1 && (
              <li>
                <a
                  onClick={() => paginate(1)} // Go to first page
                  href="#"
                  className={windowStart > 1 ? "rounded-full w-fit mx-2 page_btn-outline relative inline-flex items-center px-4 py-2.5 text-sm font-medium" : 'hidden'}
                >
                  1
                </a>
              </li>
            )}
            
            {windowStart > 2 && (
              <li className="hidden">...</li>
            )}
            {pageNumbers.slice(windowStart - 1, windowEnd).map((number) => (
              <li key={number}>
                <a
                  onClick={() => paginate(number)}
                  href="#"
                  className={`rounded-full w-fit mx-2 ${currentPage === number ? "page_btn-bg hover:opacity-50" : "page_btn-outline"} relative inline-flex items-center px-4 py-2.5 text-sm font-medium`}
                >
                  {number}
                </a>
              </li>
            ))}
            <li 
                className={windowEnd === totalPages ? 'hidden' : 'mt-1 text-2xl'}
            >. . .</li>
            {windowEnd < totalPages && (
              <li>
                <a
                  onClick={() => paginate(totalPages)} // Go to last page
                  href="#"
                  className="rounded-full w-fit mx-2 page_btn-outline relative inline-flex items-center px-4 py-2.5 text-sm font-medium"
                >
                  {totalPages}
                </a>
              </li>
            )}
          </ul>

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                paginate(currentPage + 1);
              }
            }}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center ${currentPage === totalPages ? "opacity-40" : ""}`}
          >
            <MdOutlineKeyboardArrowRight />
          </button>

          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center ${currentPage === totalPages ? "opacity-40" : ""}`}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
