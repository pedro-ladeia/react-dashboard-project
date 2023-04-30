export interface ExpensesByCategory {
    salaries:number;
    supplies: number;
    services: number;

}

export interface Month {
    id: string;
    month: string;
    revenue: number;
    expenses: number;
    operationalExpense: number;
    nonOperationalExpenses: number;
}

export interface Day {
    __id: string;
    id: string;
    revenue: number;
    expenses: number;
    date: string;
}

export interface GetKpisResponse {
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;
    totalExpenses: number;
    totalRevenue: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
    createdAt: string;
    updateAt: string;
}

export interface GetProductsResponse {
    id: string;
    _id: string;
    __v: number;
    price: number;
    expense: number;
    transactions: Array<string>
    expensesByCategory: ExpensesByCategory;
    createdAt: string;
    updateAt: string;
}