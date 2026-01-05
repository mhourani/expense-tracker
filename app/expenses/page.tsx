'use client';

import { useEffect, useState } from 'react';
import { Expense, ExpenseFilters } from '@/types/expense';
import { storageUtils } from '@/lib/storage';
import { exportToCSV } from '@/lib/utils';
import ExpenseForm from '@/components/ExpenseForm';
import ExpenseList from '@/components/ExpenseList';
import ExpenseFiltersComponent from '@/components/ExpenseFilters';

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
  const [filters, setFilters] = useState<ExpenseFilters>({
    category: 'All',
    searchQuery: '',
    startDate: '',
    endDate: '',
  });
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const loadedExpenses = storageUtils.getExpenses();
    setExpenses(loadedExpenses);
    setFilteredExpenses(loadedExpenses);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let filtered = [...expenses];

    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter((expense) => expense.category === filters.category);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter((expense) =>
        expense.description.toLowerCase().includes(query)
      );
    }

    if (filters.startDate) {
      filtered = filtered.filter(
        (expense) => new Date(expense.date) >= new Date(filters.startDate!)
      );
    }

    if (filters.endDate) {
      filtered = filtered.filter(
        (expense) => new Date(expense.date) <= new Date(filters.endDate!)
      );
    }

    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    setFilteredExpenses(filtered);
  }, [expenses, filters]);

  const handleAddExpense = (expense: Expense) => {
    const newExpenses = storageUtils.addExpense(expense);
    setExpenses(newExpenses);
    setShowForm(false);
  };

  const handleUpdateExpense = (expense: Expense) => {
    const newExpenses = storageUtils.updateExpense(expense.id, expense);
    setExpenses(newExpenses);
    setEditingExpense(null);
    setShowForm(false);
  };

  const handleDeleteExpense = (id: string) => {
    const newExpenses = storageUtils.deleteExpense(id);
    setExpenses(newExpenses);
  };

  const handleEditClick = (expense: Expense) => {
    setEditingExpense(expense);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
    setShowForm(false);
  };

  const handleExportCSV = () => {
    exportToCSV(filteredExpenses);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Expenses</h1>
          <p className="text-gray-600 mt-1">Manage your expenses</p>
        </div>
        <div className="flex gap-3">
          {filteredExpenses.length > 0 && (
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Export CSV
            </button>
          )}
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            {showForm ? 'Hide Form' : 'Add Expense'}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {editingExpense ? 'Edit Expense' : 'Add New Expense'}
          </h2>
          <ExpenseForm
            onSubmit={editingExpense ? handleUpdateExpense : handleAddExpense}
            initialData={editingExpense || undefined}
            onCancel={handleCancelEdit}
          />
        </div>
      )}

      <ExpenseFiltersComponent filters={filters} onFilterChange={setFilters} />

      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredExpenses.length} of {expenses.length} expense{expenses.length !== 1 ? 's' : ''}
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        onEdit={handleEditClick}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
}
