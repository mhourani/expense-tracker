interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export default function SummaryCard({ title, value, icon, subtitle, trend }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          {trend && (
            <div className="mt-2">
              <span
                className={`text-xs font-medium ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.isPositive ? '↑' : '↓'} {trend.value}
              </span>
            </div>
          )}
        </div>
        <div className="ml-4">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}
