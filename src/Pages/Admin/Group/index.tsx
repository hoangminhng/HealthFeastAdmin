import { Typography } from "@material-tailwind/react";

const Group: React.FC = () => {
  return (
    <div className="bg-[#e7e7e7] h-full p-3 flex flex-col">
      <Typography
        variant="h5"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Nhóm
      </Typography>
      <div className=" bg-white p-3 mx-2 h-full flex flex-col items-center justify-between">
        Coming soon
      </div>
    </div>
  );
};

export default Group;
