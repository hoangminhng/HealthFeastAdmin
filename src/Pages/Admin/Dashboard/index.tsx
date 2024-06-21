import { Typography } from "@material-tailwind/react";
import PlusIcon from "../../../Component/Icon/plusIcon";
import StaticticCard from "../../../Component/StatisticCard";
import { NumberFormat } from "../../../Utils/numberFormat";
import { useEffect, useState } from "react";
import { GetTotalStatistic } from "../../../api/Dashboard";

const Dashboard: React.FC = () => {
  const [dashboard, setDashboard] = useState<Dashboard | undefined>();
  const fetchStatistic = async () => {
    try {
      let respone = await GetTotalStatistic();
      setDashboard(respone.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      fetchStatistic();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-400 dark:text-gray-500 w-full h-full">
            <StaticticCard
              title="Tổng phí giao dịch"
              value={NumberFormat(dashboard?.totalMoney ?? 0)}
              icon={
                <svg
                  className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 6V18"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              }
            />
          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-400 dark:text-gray-500 w-full h-full">
            <StaticticCard
              title="Người dùng mới"
              value={dashboard?.totalUser.toString() ?? "0"}
              icon={
                <svg
                  className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect
                      x="-2.4"
                      y="-2.4"
                      width="28.80"
                      height="28.80"
                      rx="14.4"
                      fill="#b8cfff"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle
                      cx="12"
                      cy="9"
                      r="3"
                      stroke="#000000"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#000000"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              }
            />
          </p>
        </div>
        {/* <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-400 dark:text-gray-500 w-full h-full">
            <StaticticCard
              title="Tổng thu nhập"
              value={NumberFormat(764305000)}
              icon={
                <svg
                  fill="#f1bc00"
                  className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="-132.92 -132.92 758.15 758.15"
                  xmlSpace="preserve"
                  stroke="#f1bc00"
                  strokeWidth="9.353852"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect
                      x="-132.92"
                      y="-132.92"
                      width="758.15"
                      height="758.15"
                      rx="379.075"
                      fill="#f4e9c2"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M355.813,0H32.264v492.308h427.779V104.231L355.813,0z M361.582,33.615l64.846,64.846h-64.846V33.615z M440.351,472.615 H51.957V19.692h289.933v98.462h98.462V472.615z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M315.543,331.885v109.947h92.308V331.885H315.543z M388.159,422.139h-52.923v-70.563h52.923V422.139z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M199.995,272.808v169.024h92.308V272.808H199.995z M272.611,422.139h-52.923V292.5h52.923V422.139z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M84.447,213.731v228.101h92.308V213.731H84.447z M157.062,422.139h-52.923V233.423h52.923V422.139z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              }
            />
          </p>
        </div> */}
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-400 dark:text-gray-500 w-full h-full">
            <StaticticCard
              title="Tổng khối lượng giao dịch"
              value={dashboard?.totalTransaction.toString() ?? "0"}
              icon={
                <svg
                  className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                  fill="#5b8f57"
                  viewBox="-9.28 -9.28 50.56 50.56"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0">
                    <rect
                      x="-9.28"
                      y="-9.28"
                      width="50.56"
                      height="50.56"
                      rx="25.28"
                      fill="#dde8dc"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M8.502 9.999h-7.002c-0.552 0-1 0.447-1 1v20.001c0 0.552 0.448 1 1 1h7.002c0.553 0 1-0.448 1-1v-20c0-0.553-0.447-1-1-1zM7.502 30h-5.002v-18h5.002v18zM19.492 15.945h-7.003c-0.553 0-1 0.448-1 1v14.055c0 0.552 0.447 1 1 1h7.003c0.552 0 1-0.448 1-1v-14.055c0-0.553-0.447-1-1-1zM18.492 30h-5.003v-12.055h5.003v12.055zM30.5 0h-6.992c-0.552 0-1 0.448-1 1v30c0 0.552 0.448 1 1 1h6.992c0.552 0 1-0.448 1-1v-30c0-0.552-0.448-1-1-1zM29.5 30h-4.992v-28h4.992v28z"></path>{" "}
                  </g>
                </svg>
              }
            />
          </p>
        </div>
      </div>
      <Typography
        variant="h5"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Tổng doanh thu
      </Typography>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <p className="text-2xl text-gray-400 dark:text-gray-500">
          <PlusIcon />
        </p>
      </div>
    </>
  );
};

export default Dashboard;
