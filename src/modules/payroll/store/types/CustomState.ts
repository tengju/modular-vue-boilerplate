export interface PayrollItem {
  id: number;
  type: string;
  price: number;
}

export interface CustomState {
  isFetching: boolean;
  payroll: PayrollItem[];
  payrollItem: PayrollItem | null;
}
