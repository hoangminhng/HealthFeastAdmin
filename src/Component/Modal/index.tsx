const AddUserModal: React.FC = () => {
  return (
    <>
      <div className="relative w-full max-w-4xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="py-6 rounded-t dark:border-gray-600">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
              Thêm người dùng
            </h3>
          </div>
          <div className="p-4">
            <form className="flex flex-col items-center">
              <div className="w-full mb-3 px-8">
                <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Tên người dùng
                </label>
                <input
                  type="text"
                  className="border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nhập tên"
                  required
                />
              </div>
              <div className="w-full mb-3 px-8">
                <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nhập số"
                  required
                />
              </div>
              <div className="w-full mb-3 px-8">
                <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Giảm giá
                </label>
                <div className="relative">
                  <p className="absolute end-2.5 bottom-2 text-lg text-black font-bold">
                    VNĐ
                  </p>
                  <input
                    type="number"
                    className="border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nhập số"
                    required
                  />
                </div>
              </div>

              <button
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserModal;
