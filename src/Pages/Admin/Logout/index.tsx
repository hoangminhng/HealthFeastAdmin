import { useNavigate } from "react-router-dom";

const LogoutModal: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="bg-[#2E2E2E] p-4 rounded-2xl shadow-lg max-w-sm w-full text-white">
      <h2 className="text-xl font-bold mb-4 w-full text-center">
        Bạn muốn đăng xuất?
      </h2>
      <p className="mb-4 w-full text-center">Nhớ quay lại nhé!</p>
      <div className="flex justify-evenly space-x-2">
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#B4B4B4] rounded text-white hover:bg-[#9ABF5A]"
        >
          Quay lại
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-[#9ABF5A] text-white rounded hover:bg-[#7eba4e]"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
