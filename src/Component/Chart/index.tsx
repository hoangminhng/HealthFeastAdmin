import { Column } from "@ant-design/plots";

const DemoColumn = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json",
    },
    xField: "月份",
    yField: "月均降雨量",
    colorField: "name",
    group: true,
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
