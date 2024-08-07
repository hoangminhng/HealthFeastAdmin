import { Checkbox, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AddUserModal from "../../../Component/Modal";
import { GetUser } from "../../../api/User";
import { NumberFormat } from "../../../Utils/numberFormat";

const User: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userlList, setUserList] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      // If the click occurs on the overlay (not on the modal content), close the modal
      toggleModal();
    }
  };

  const fetchUsers = async () => {
    let respone = await GetUser();
    setUserList(respone?.data);
  };

  useEffect(() => {
    try {
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentDoctors = userlList?.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const totalPages = Math.ceil(userlList.length / usersPerPage);
  return (
    <>
      <style>
        {`
          .rounded-thead th:first-child {
            border-top-left-radius: 0.5rem; /* Adjust the value as needed */
          }
          
          .rounded-thead th:last-child {
            border-top-right-radius: 0.5rem; /* Adjust the value as needed */
          }
          
          .rounded-tbody tr:first-child th {
            border-bottom-left-radius: 0.5rem; /* Adjust the value as needed */
          }
          
          .rounded-tbody tr:first-child td:last-child {
            border-bottom-right-radius: 0.5rem; /* Adjust the value as needed */
          }
          
          .rounded-tbody tr:last-child th {
            border-bottom-left-radius: 0.5rem; /* Adjust the value as needed */
          }
          
          .rounded-tbody tr:last-child td:last-child {
            border-bottom-right-radius: 0.5rem; /* Adjust the value as needed */
          }
          
        `}
      </style>
      <div className="bg-[#e7e7e7] h-full p-3 flex flex-col">
        <Typography
          variant="h5"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Tất cả người dùng
        </Typography>
        <div className="bg-white p-3 mx-2 h-full flex flex-col items-center justify-between">
          <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 rounded-thead">
                <tr className="rounded-lg">
                  <th scope="col" className="px-6 py-3">
                    {" "}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tên người dùng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gói dùng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Đã thanh toán
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="rounded-tbody">
                {currentDoctors?.map((user) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th>
                      <Checkbox
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        crossOrigin={undefined}
                      />
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-bl-lg flex items-center"
                    >
                      {user.name}
                    </th>
                    <td className="px-6 py-4">{user.premiumType}</td>
                    <td className="px-6 py-4 text-green-500">
                      {NumberFormat(user.totalPay)}
                    </td>
                    <td className="px-6 py-4 text-black">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 text-sm text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 text-sm rounded-md ${
                currentPage === index + 1
                  ? "bg-[#9ABF5A] text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 text-sm text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          >
            Next
          </button>
        </div>
          </div>
          {/* <button
            onClick={toggleModal}
            type="button"
            className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-3 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-fit flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clip-rule="evenodd"
              />
            </svg>
            Thêm người dùng
          </button> */}
          {isModalOpen && (
            <div
              tabIndex={-1}
              aria-hidden="true"
              onMouseDown={handleOverlayClick}
              className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full inset-0 overflow-x-hidden overflow-y-auto flex bg-black bg-opacity-50  "
              // className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <AddUserModal />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
