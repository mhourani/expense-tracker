import { Expense } from '@/types/expense';

const STORAGE_KEY = 'expense-tracker-data';

export const storageUtils = {
  getExpenses: (): Expense[] => {
    if (typeof window === 'undefined') return [];

    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  saveExpenses: (expenses: Expense[]): void => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },

  addExpense: (expense: Expense): Expense[] => {
    const expenses = storageUtils.getExpenses();
    const newExpenses = [...expenses, expense];
    storageUtils.saveExpenses(newExpenses);
    return newExpenses;
  },

  updateExpense: (id: string, updatedExpense: Partial<Expense>): Expense[] => {
    const expenses = storageUtils.getExpenses();
    const newExpenses = expenses.map((expense) =>
      expense.id === id
        ? { ...expense, ...updatedExpense, updatedAt: new Date().toISOString() }
        : expense
    );
    storageUtils.saveExpenses(newExpenses);
    return newExpenses;
  },

  deleteExpense: (id: string): Expense[] => {
    const expenses = storageUtils.getExpenses();
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    storageUtils.saveExpenses(newExpenses);
    return newExpenses;
  },

  clearAllExpenses: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  },
};
