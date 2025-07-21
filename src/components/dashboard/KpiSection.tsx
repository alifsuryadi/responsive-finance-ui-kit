import { useState } from 'react';
import { FiChevronDown, FiDollarSign, FiTrendingUp, FiTarget, FiBarChart, FiFilter, FiCreditCard } from 'react-icons/fi';

const KpiSection = () => {
  const [activeTab, setActiveTab] = useState('expenses');

  const tabs = [
    { id: 'expenses', label: 'Расходы', active: true },
    { id: 'replenishment', label: 'Пополнение', active: false },
    { id: 'create', label: 'Создать проект', active: false },
  ];

  const leftColumnData = [
    { label: 'Всего контрактов на сумму', value: '5 278 000 000 Rp', icon: FiDollarSign },
    { label: 'Всего оплачено клиентами', value: '320 000 000 Rp', icon: FiTrendingUp },
    { label: 'Всего прямых расходов', value: '3 680 000 000 Rp', icon: FiBarChart },
    { label: 'Всего валовой прибыли', value: '1 598 000 000 Rp', icon: FiTarget },
  ];

  const middleColumnData = [
    { label: 'Баланс клиентов', value: '1 598 000 000 Rp', icon: FiCreditCard },
    { label: 'Баланс компании', value: '5 278 000 000 Rp', icon: FiTrendingUp },
    { label: 'Баланс компании и клиентов', value: '6 876 000 000 Rp', icon: FiBarChart },
    { label: 'Баланс в банке', value: '6 870 000 000 Rp', icon: FiTarget },
  ];

  const rightColumnData = [
    { label: 'Разница баланса', value: '0 Rp', icon: FiTarget },
    { label: 'Выбрано на сумму', value: '7 560 000 000 Rp', icon: FiBarChart },
    { label: 'Выбран фильтр на сумму', value: '12 600 000 000 Rp', icon: FiFilter, change: '+1.119%', positive: true },
    { label: 'Выполненный объем по 10-дневной статистике', value: '1 319 500 000 Rp', percentage: '25%', icon: FiBarChart },
  ];

  return (
    <div className="mb-8">
      {/* Tabs */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 bg-muted rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table Layout */}
      <div className="bg-card rounded-lg border border-card-border overflow-hidden">
        {/* Mobile View */}
        <div className="block lg:hidden">
          <div className="space-y-4 p-4">
            {/* Left Column Data */}
            <div className="space-y-3">
              {leftColumnData.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-card-border last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
            
            {/* Middle Column Data */}
            <div className="space-y-3 pt-4 border-t border-card-border">
              {middleColumnData.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-card-border last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Right Column Data */}
            <div className="space-y-3 pt-4 border-t border-card-border">
              {rightColumnData.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-card-border last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-foreground">{item.value}</span>
                    {item.change && (
                      <span className={`text-xs font-medium ${item.positive ? 'text-success' : 'text-destructive'}`}>
                        {item.change}
                      </span>
                    )}
                    {item.percentage && (
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-muted-foreground">{item.percentage}</span>
                        <div className="w-12 h-1 bg-muted rounded-full">
                          <div className="w-1/4 h-1 bg-success rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 divide-x divide-card-border">
            {/* Left Column */}
            <div className="p-6">
              <div className="space-y-4">
                {leftColumnData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Column */}
            <div className="p-6">
              <div className="space-y-4">
                {middleColumnData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="p-6">
              <div className="space-y-4">
                {rightColumnData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-foreground">{item.value}</span>
                      {item.change && (
                        <span className={`text-xs font-medium ${item.positive ? 'text-success' : 'text-destructive'}`}>
                          {item.change}
                        </span>
                      )}
                      {item.percentage && (
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{item.percentage}</span>
                          <div className="w-16 h-2 bg-muted rounded-full">
                            <div className="w-1/4 h-2 bg-success rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiSection;