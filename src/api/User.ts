export const GetUser = async () => {
  const fakeUsers: User[] = [
    {
      userId: 1,
      userName: "Nguyễn Văn Dũng",
      phoneNumber: "01237123099",
      dateRegistered: new Date("2024-03-17"),
      memberShip: "Premium",
      paymentAmout: 4999999,
      debt: 0,
    },
    {
      userId: 2,
      userName: "Lê Trung Thọ",
      phoneNumber: "08128241932",
      dateRegistered: new Date("2024-03-24"),
      memberShip: "Premium",
      paymentAmout: 2029999,
      debt: 2970000,
    },
    {
      userId: 3,
      userName: "Lê Vũ Đình Duy",
      phoneNumber: "01237123099",
      dateRegistered: new Date("2024-03-17"),
      memberShip: "Premium",
      paymentAmout: 4999999,
      debt: 0,
    },
    {
      userId: 4,
      userName: "Tống Ái Linh",
      phoneNumber: "08128241932",
      dateRegistered: new Date("2024-03-24"),
      memberShip: "Premium",
      paymentAmout: 2029999,
      debt: 2970000,
    },
  ];

  return fakeUsers;
};
