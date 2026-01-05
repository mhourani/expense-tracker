import { ExpenseCategory } from '@/types/expense';
import { formatCurrency } from '@/lib/utils';

interface CategoryBreakdownProps {
  categoryTotals: Record<ExpenseCategory, number>;
}

const categoryColors: Record<ExpenseCategory, string> = {
  Food: 'bg-orange-500',
  Transportation: 'bg-blue-500',
  Entertainment: 'bg-purple-500',
  Shopping: 'bg-pink-500',
  Bills: 'bg-red-500',
  Other: 'bg-gray-500',
};

export default function CategoryBreakdown({ categoryTotals }: CategoryBreakdownProps) {
  const total = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);

  const sortedCategories = (Object.keys(categoryTotals) as ExpenseCategory[])
    .map((category) => ({
      category,
      amount: categoryTotals[category],
      percentage: total > 0 ? (categoryTotals[category] / total) * 100 : 0,
    }))
    .sort((a, b) => b.amount - a.amount);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h3>
      <div className="space-y-4">
        {sortedCategories.map(({ category, amount, percentage }) => (
          <div key={category}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${categoryColors[category]}`} />
                <span className="text-sm font-medium text-gray-700">{category}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                {formatCurrency(amount)}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${categoryColors[category]}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        ))}
        {total === 0 && (
          <p className="text-sm text-gray-500 text-center py-4">No expenses yet</p>
        )}
      </div>
    </div>
  );
}
