interface StaticsticCardProperties {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StaticticCard: React.FC<StaticsticCardProperties> = ({
  title,
  value,
  icon,
}) => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full h-full">
        <div className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          <div className="flex justify-center mt-3">
            {icon}
            {title}
          </div>
          <div className="text-m text-gray-500 dark:text-gray-400">
            {value}
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticticCard;
