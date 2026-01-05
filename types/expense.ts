export type ExpenseCategory =
  | 'Food'
  | 'Transportation'
  | 'Entertainment'
  | 'Shopping'
  | 'Bills'
  | 'Other';

export interface Expense {
  id: string;
  date: string; // ISO date string
  amount: number;
  category: ExpenseCategory;
  description: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface ExpenseFormData {
  date: string;
  amount: string;
  category: ExpenseCategory;
  description: string;
}

export interface ExpenseFilters {
  category?: ExpenseCategory | 'All';
  startDate?: string;
  endDate?: string;
  searchQuery?: string;
}

export interface ExpenseSummary {
  totalExpenses: number;
  monthlyTotal: number;
  categoryTotals: Record<ExpenseCategory, number>;
  topCategory: ExpenseCategory | null;
  averageExpense: number;
}
