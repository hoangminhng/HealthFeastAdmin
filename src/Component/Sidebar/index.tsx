import Dashboard from "../Icon/dashboard";
import User from "../Icon/user";
import Group from "../Icon/group";
import Doctor from "../Icon/doctor";
// import Equipment from "../Icon/equipment";
// import Print from "../Icon/print";
// import Report from "../Icon/report";
import OtherOption from "../Icon/otherOption";
import Introduction from "../Icon/introduction";
import SignOut from "../Icon/signOut";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IntroductionPage from "../../Pages/Admin/Introduction";
import LogoutModal from "../../Pages/Admin/Logout";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false);

  const toggleModal = () => {
    setIsIntroModalOpen(!isIntroModalOpen);
  };

  const toggleLogoutModal = () => {
    setIsLogoutModalOpen(!isLogoutModalOpen);
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement>,
    closeModal: () => void
  ) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const sidebarItem = [
    {
      label: "Bảng điều khiển",
      icon: <Dashboard />,
      path: "/admin",
    },
    {
      label: "Người dùng",
      icon: <User />,
      path: "/admin/user",
    },
    {
      label: "Nhóm",
      icon: <Group />,
      path: "/admin/group",
    },
    {
      label: "Bác sĩ",
      icon: <Doctor />,
      path: "/admin/doctor",
    },
    // {
    //   label: "Thiết bị",
    //   icon: <Equipment />,
    //   path: "/admin/equipment",
    // },
    // {
    //   label: "In",
    //   icon: <Print />,
    //   path: "/admin/print",
    // },
    // {
    //   label: "Báo cáo",
    //   icon: <Report />,
    //   path: "/admin/report",
    // },
    {
      label: "Lựa chọn khác",
      icon: <OtherOption />,
      path: "/admin/other-option",
    },
    {
      label: "Giới thiệu",
      icon: <Introduction />,
      path: "/admin/introduction",
    },
  ];

  const handleOnclickButton = (path: string) => {
    console.log(path);
    if (path !== "/admin/introduction") {
      navigate(path);
    } else {
      console.log("open modal");
      setIsIntroModalOpen(!isIntroModalOpen);
    }
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* <a href="/admin" className="flex ms-2 md:me-24 w-full"></a> */}
          <img
            src="https://res.cloudinary.com/dfdwupiah/image/upload/v1718878623/eddcwcvk7lc21urydg61.jpg"
            className=" me-3"
            alt="FlowBite Logo"
          />
          <ul className="space-y-2 font-medium">
            {sidebarItem.map(({ label, icon, path }, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={() => handleOnclickButton(path)}
                    className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {icon}
                    <span className="ms-3">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <ul className="space-y-2 font-medium mt-auto justify-end">
            <li>
              <button
                onClick={toggleLogoutModal}
                className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SignOut />
                <span className="ms-3">Đăng xuất</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      {isIntroModalOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          onMouseDown={(e) => handleOverlayClick(e, toggleModal)}
          className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full inset-0 overflow-x-hidden overflow-y-auto flex bg-black bg-opacity-50  "
          // className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <IntroductionPage />
        </div>
      )}

      {isLogoutModalOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          onMouseDown={(e) => handleOverlayClick(e, toggleLogoutModal)}
          className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full inset-0 overflow-x-hidden overflow-y-auto flex bg-black bg-opacity-50"
        >
          <LogoutModal />
        </div>
      )}
    </>
  );
};

export default Sidebar;
