import { Expense, ExpenseSummary, ExpenseCategory } from '@/types/expense';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const calculateSummary = (expenses: Expense[]): ExpenseSummary => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const monthlyTotal = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categoryTotals: Record<ExpenseCategory, number> = {
    Food: 0,
    Transportation: 0,
    Entertainment: 0,
    Shopping: 0,
    Bills: 0,
    Other: 0,
  };

  expenses.forEach((expense) => {
    categoryTotals[expense.category] += expense.amount;
  });

  let topCategory: ExpenseCategory | null = null;
  let maxAmount = 0;

  (Object.keys(categoryTotals) as ExpenseCategory[]).forEach((category) => {
    if (categoryTotals[category] > maxAmount) {
      maxAmount = categoryTotals[category];
      topCategory = category;
    }
  });

  const averageExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;

  return {
    totalExpenses,
    monthlyTotal,
    categoryTotals,
    topCategory,
    averageExpense,
  };
};

export const exportToCSV = (expenses: Expense[]): void => {
  const headers = ['Date', 'Category', 'Amount', 'Description'];
  const csvContent = [
    headers.join(','),
    ...expenses.map((expense) =>
      [
        expense.date,
        expense.category,
        expense.amount,
        `"${expense.description.replace(/"/g, '""')}"`,
      ].join(',')
    ),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', `expenses-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
