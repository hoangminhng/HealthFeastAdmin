import { Column } from "@ant-design/plots";

const data = [
  {
    month: "Jan.",
    value: 18.9,
  },
  {
    month: "Feb.",
    value: 28.8,
  },
  {
    month: "Mar.",
    value: 39.3,
  },
  {
    month: "Apr.",
    value: 81.4,
  },
  {
    month: "May",
    value: 47,
  },
  {
    month: "Jun.",
    value: 20.3,
  },
  {
    month: "Jul.",
    value: 24,
  },
  {
    month: "Aug.",
    value: 35.6,
  },
];

const DemoColumn = () => {
  const config = {
    data,
    xField: "month",
    yField: "value",
    colorField: "month",
    group: false,
    style: {
      // 矩形四个方向的内边距
      inset: 5,
      innerHeight: 0.8,
      innerWidth: 0.8,
      // 矩形单个方向的内边距
      // insetLeft:5,
      // insetRight:20,
      // insetBottom:10
      // insetTop:10
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
