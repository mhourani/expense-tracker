import { Expense } from '@/types/expense';
import { formatCurrency, formatDate } from '@/lib/utils';
import Link from 'next/link';

interface RecentExpensesProps {
  expenses: Expense[];
}

export default function RecentExpenses({ expenses }: RecentExpensesProps) {
  const recentExpenses = expenses
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Expenses</h3>
        <Link
          href="/expenses"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View all
        </Link>
      </div>
      <div className="space-y-3">
        {recentExpenses.length > 0 ? (
          recentExpenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{expense.description}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500">{formatDate(expense.date)}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs font-medium text-gray-600">{expense.category}</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-900 ml-4">
                {formatCurrency(expense.amount)}
              </span>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 text-center py-4">No expenses yet</p>
        )}
      </div>
    </div>
  );
}
