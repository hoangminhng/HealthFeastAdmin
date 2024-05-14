import Dashboard from "../../../Component/Icon/dashboard";
import User from "../../../Component/Icon/user";
import Group from "../../../Component/Icon/group";
import Doctor from "../../../Component/Icon/doctor";
import Equipment from "../../../Component/Icon/equipment";
import Print from "../../../Component/Icon/print";
import Report from "../../../Component/Icon/report";
import OtherOption from "../../../Component/Icon/otherOption";
import Introduction from "../../../Component/Icon/introduction";
import SignOut from "../../../Component/Icon/signOut";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
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
    },
    {
      label: "Bác sĩ",
      icon: <Doctor />,
    },
    {
      label: "Thiết bị",
      icon: <Equipment />,
    },
    {
      label: "In",
      icon: <Print />,
    },
    {
      label: "Báo cáo",
      icon: <Report />,
    },
    {
      label: "Lựa chọn khác",
      icon: <OtherOption />,
    },
    {
      label: "Giới thiệu",
      icon: <Introduction />,
    },
  ];

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="#" className="flex ms-2 md:me-24">
            <img
              src="src\assets\healthfeast.png"
              className="h-8 me-3"
              alt="FlowBite Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              Health Feast
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            {sidebarItem.map(({ label, icon, path }, key) => {
              return (
                <li key={key}>
                  <Link
                    to={path || ""}
                    className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {icon}
                    <span className="ms-3">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="space-y-2 font-medium mt-auto justify-end">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SignOut />
                <span className="ms-3">Đăng xuất</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
