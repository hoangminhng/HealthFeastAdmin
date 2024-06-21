const IntroductionPage: React.FC = () => {
  return (
    <>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg dark:bg-gray-700 flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1718955561/xymxo54srbs48puhzlnk.png"
            alt=""
          />
          <p className="text-white text-center">Version 24.0.2.02.024</p>
          <p className="text-white text-center">
            Healthfeast là một ứng dụng giúp đo đạt, hướng dẫn, lưu trữ dành cho
            những người quan tâm đến bữa ăn, sức khỏe và thể hình ở Việt Nam.
          </p>
          <p className="text-white text-center">
            Mặc dù chưa có ứng dụng nào tính toán lượng calo phù hợp cho món ăn
            Việt Nam. Để giải quyết vấn đề đó
          </p>
          <p className="text-white text-center">
            Healthfeast được tạo ra để phát triển tính năng quét món ăn Việt
            Nam, xác định lượng calo và phát triển tính năng gợi ý thực đơn hàng
            ngày, hàng tuần.
          </p>
        </div>
      </div>
    </>
  );
};
export default IntroductionPage;
