import { useState } from "react";
import DoctorList from "./DoctorList";

interface TabProps {
  id: string;
  label: string;
  content: React.ReactNode;
}

const tabs: TabProps[] = [
  {
    id: "profile",
    label: "Bác sĩ",
    content: <DoctorList />,
  },
  {
    id: "dashboard",
    label: "Hồ sơ",
    content: <p>This is the Dashboard tab's associated content.</p>,
  },
  {
    id: "settings",
    label: "Chỉnh sửa",
    content: <p>This is the Settings tab's associated content.</p>,
  },
  {
    id: "contacts",
    label: "Thêm hồ sơ",
    content: <p>This is the Contacts tab's associated content.</p>,
  },
];

const Doctor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="bg-[#e7e7e7] h-full flex flex-col">
      <div className="mb-4 border-b border-t border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center bg-white px-4"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2 mx-2" role="presentation">
              <button
                className={`inline-block p-4  rounded-t-lg ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#9ABF5A] font-semibold dark:border-gray-700 dark:text-gray-200"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-semibold"
                }`}
                id={`${tab.id}-tab`}
                data-tabs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`bg-[#e7e7e7] dark:bg-gray-800 ${
              activeTab === tab.id ? "block" : "hidden"
            }`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
