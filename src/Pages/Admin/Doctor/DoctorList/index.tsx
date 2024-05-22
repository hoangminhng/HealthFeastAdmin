import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { GetAllDoctors } from "../../../../api/Doctor";
import { NumberFormat } from "../../../../Utils/numberFormat";

const DoctorList: React.FC = () => {
  const [doctorList, setDoctorList] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4;

  const fetchDoctors = async () => {
    let response = await GetAllDoctors();
    setDoctorList(response);
    if (response.length > 0) {
      setSelectedDoctor(response[0]); // Set the first doctor as the default selected doctor
    }
  };

  useEffect(() => {
    try {
      fetchDoctors();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctorList?.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );
  const totalPages = Math.ceil(doctorList.length / doctorsPerPage);

  return (
    <div className="p-3 mx-2 h-full flex flex-col">
      {selectedDoctor && (
        <div className="flex w-full bg-white pb-3">
          <div className="flex flex-col w-1/2 px-7 my-4 py-3">
            <Typography
              variant="h5"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Hồ sơ
            </Typography>
            <div className="flex items-center justify-around px-3">
              <img
                className="rounded-full w-36 h-36"
                src={selectedDoctor.imgPath}
                alt="Extra large avatar"
              />
              <div>
                <div className="flex items-center">
                  <Typography
                    variant="h5"
                    placeholder=""
                    className=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Bác sĩ{" "}
                    <span className="font-normal">{selectedDoctor.name}</span>
                  </Typography>
                </div>

                <p className="text-base text-gray-900 dark:text-white">
                  {selectedDoctor.address}
                </p>
                <p className="text-base text-gray-900 dark:text-white">
                  {selectedDoctor.email}
                </p>
                <p className="text-base text-gray-900 dark:text-white">
                  {selectedDoctor.phoneNumber}
                </p>
              </div>
            </div>
          </div>
          <div className="w-3/12 border-l-2 border-r-2 my-4 p-3">
            <Typography
              variant="h5"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Mạng xã hội
            </Typography>
          </div>
          <form className="w-3/12 flex flex-col justify-center items-end my-4 p-3">
            <button
              type="submit"
              className="text-white bg-[#9ABF5A] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-fit flex items-center"
            >
              Gửi phản hồi
            </button>
            <textarea
              id="message"
              rows={parseInt("4")}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              required
            ></textarea>
          </form>
        </div>
      )}
      <Typography
        variant="h5"
        placeholder=""
        className="ml-5 my-3"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Bác sĩ
      </Typography>
      <div className="bg-white mx-2 py-3 px-4 h-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#9ABF5A80] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Họ và tên
              </th>
              <th scope="col" className="px-6 py-3">
                Chuyên gia
              </th>
              <th scope="col" className="px-6 py-3">
                Mạng xã hội
              </th>
              <th scope="col" className="px-6 py-3">
                Chi phí
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDoctors?.map((doctor, id) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center">
                  <img
                    className="w-12 h-12 rounded-full me-4"
                    src={doctor.imgPath}
                    alt="Doctor avatar"
                  />
                  {doctor.name}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {doctor.consultant}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {doctor.socialNetwork}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {NumberFormat(doctor.fee)}
                </td>
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
    </div>
  );
};

export default DoctorList;
