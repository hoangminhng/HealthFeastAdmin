interface Dashboard {
  totalTransaction: number;
  totalUser: number;
  totalMoney: number;
  monthlyTransaction: Record<string, number>;
}
