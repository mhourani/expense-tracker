import { Expense } from '@/types/expense';
import { formatCurrency } from '@/lib/utils';

interface SpendingChartProps {
  expenses: Expense[];
}

export default function SpendingChart({ expenses }: SpendingChartProps) {
  const getLast6Months = () => {
    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({
        month: date.toLocaleString('default', { month: 'short' }),
        year: date.getFullYear(),
        monthIndex: date.getMonth(),
        fullYear: date.getFullYear(),
      });
    }

    return months;
  };

  const months = getLast6Months();

  const monthlyData = months.map(({ month, monthIndex, fullYear }) => {
    const total = expenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate.getMonth() === monthIndex &&
          expenseDate.getFullYear() === fullYear
        );
      })
      .reduce((sum, expense) => sum + expense.amount, 0);

    return { month, total };
  });

  const maxTotal = Math.max(...monthlyData.map((d) => d.total), 1);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Spending Trend</h3>
      <div className="space-y-4">
        {monthlyData.map(({ month, total }) => {
          const percentage = (total / maxTotal) * 100;
          return (
            <div key={month}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 w-12">{month}</span>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(total)}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                <div
                  className="h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 flex items-center justify-end pr-3"
                  style={{ width: `${Math.max(percentage, 0)}%` }}
                >
                  {total > 0 && percentage > 15 && (
                    <span className="text-xs font-medium text-white">
                      {formatCurrency(total)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {expenses.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-4">
          No data to display
        </p>
      )}
    </div>
  );
}
