import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [tel, setTel] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const notify = () => {
    if (tel === "" || password === "") {
      toast.error("Vui lòng điền đầy đủ thông tin.", {
        duration: 2000,
      });
    } else if (tel === "admin" && password === "123456") {
      console.log("Login success");
      navigate("/dashboard");
    } else {
      toast.error("Sai thông tin đăng nhập.", {
        duration: 2000,
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      notify(); // Trigger login action
    }
  };

  return (
    <div className="bg-[#2e2e2e] min-h-screen">
      <form
        className="max-w-sm mx-auto flex flex-col items-center"
        onKeyDown={handleKeyDown}
      >
        <img src="src\assets\healthfeast.png" alt="logo" className="w-5/6" />
        <div className="mb-5 text-center">
          <label className="block mb-2 text-5xl font-extrabold text-[#FFFFFF]">
            Đăng nhập
          </label>
        </div>
        <div className="mb-1 w-full">
          <label className="block mb-2 text-sm font-medium text-[#9ABF5A]">
            Bạn quên mật khẩu?
          </label>
        </div>
        <div className="mb-5 w-full">
          <input
            type="tel"
            id="tel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            placeholder="Số điện thoại"
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập mật khẩu"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex items-start mb-5">
          <label className="ms-2 text-sm font-medium text-[#B4B4B4] dark:text-gray-300">
            Bạn chưa có tài khoản?
          </label>
          <label className="ms-2 text-sm font-medium text-[#FFFFFF] dark:text-gray-300 underline">
            Đăng ký
          </label>
        </div>
        <button
          type="button"
          onClick={notify}
          className="text-white bg-[#9ABF5A] hover:bg-[#7eba4e] font-semibold rounded-lg text-lg w-full px-5 py-2.5 text-center"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
