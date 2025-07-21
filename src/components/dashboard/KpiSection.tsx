import { FiChevronDown, FiDollarSign, FiTrendingUp, FiTarget, FiBarChart } from 'react-icons/fi';

const KpiSection = () => {
  const kpiData = [
    { label: 'Всего контрактов на сумму', value: '5 278 000 000 Rp', icon: FiDollarSign },
    { label: 'Всего оплачено клиентами', value: '320 000 000 Rp', icon: FiTrendingUp },
    { label: 'Всего прочих расходов', value: '3 680 000 000 Rp', icon: FiBarChart },
    { label: 'Всего валовой прибыли', value: '1 598 000 000 Rp', icon: FiTarget },
    { label: 'Баланс клиентов', value: '1 598 000 000 Rp', icon: FiDollarSign },
    { label: 'Баланс компании', value: '5 278 000 000 Rp', icon: FiTrendingUp },
    { label: 'Баланс компании в кредитном', value: '6 876 000 000 Rp', icon: FiBarChart },
    { label: 'Баланс в банке', value: '6 870 000 000 Rp', icon: FiTarget },
  ];

  const summaryStats = [
    { label: 'Разница баланса', value: '0 Rp', change: 0 },
    { label: 'Выберем по сумму', value: '7 560 000 000 Rp', change: 0 },
    { label: 'Выберем фильтр по сумму', value: '12 600 000 000 Rp', change: 1.119, positive: true },
  ];

  return (
    <div className="mb-8">
      {/* Period Selector */}
      <div className="mb-6">
        <button className="flex items-center space-x-2 bg-card border border-card-border rounded-md px-4 py-2 text-sm font-medium text-text-primary hover:bg-gray-50">
          <span>Период</span>
          <FiChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-card border border-card-border rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <kpi.icon className="h-4 w-4 text-text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-text-muted mb-1">{kpi.label}</div>
                <div className="text-sm font-semibold text-text-primary truncate">{kpi.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryStats.map((stat, index) => (
          <div key={index} className="bg-card border border-card-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-text-muted mb-1">{stat.label}</div>
                <div className="text-sm font-semibold text-text-primary">{stat.value}</div>
              </div>
              {stat.change !== 0 && (
                <div className={`text-xs font-medium ${stat.positive ? 'text-success' : 'text-danger'}`}>
                  {stat.positive ? '+' : ''}{stat.change}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KpiSection;