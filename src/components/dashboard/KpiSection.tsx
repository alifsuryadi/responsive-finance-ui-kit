import { useState } from "react";
import {
  FiChevronDown,
  FiDollarSign,
  FiTrendingUp,
  FiTarget,
  FiBarChart,
  FiFilter,
  FiCreditCard,
} from "react-icons/fi";

const KpiSection = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  const tabs = [
    { id: "expenses", label: "Расходы", active: true },
    { id: "replenishment", label: "Пополнение", active: false },
    { id: "create", label: "Создать проект", active: false },
  ];

  const firstColumnData = [
    {
      label: "Всего контрактов на сумму",
      value: "5 278 000 000 Rp",
      icon: FiDollarSign,
    },
    {
      label: "Всего оплачено клиентами",
      value: "320 000 000 Rp",
      icon: FiTrendingUp,
    },
    {
      label: "Всего прямых расходов",
      value: "3 680 000 000 Rp",
      icon: FiBarChart,
    },
    {
      label: "Всего валовой прибыли",
      value: "1 598 000 000 Rp",
      icon: FiTarget,
    },
  ];

  const secondColumnData = [
    { label: "Баланс клиентов", value: "1 598 000 000 Rp", icon: FiCreditCard },
    { label: "Баланс компании", value: "5 278 000 000 Rp", icon: FiTrendingUp },
    {
      label: "Баланс компании и клиентов",
      value: "6 876 000 000 Rp",
      icon: FiBarChart,
    },
    { label: "Баланс в банке", value: "6 870 000 000 Rp", icon: FiTarget },
  ];

  const thirdColumnData = [
    { label: "Разница баланса", value: "0 Rp", icon: FiTarget },
    { label: "Выбрано на сумму", value: "7 560 000 000 Rp", icon: FiBarChart },
    {
      label: "Выбран фильтр на сумму",
      value: "12 600 000 000 Rp",
      icon: FiFilter,
    },
  ];

  const fourthColumnData = [
    {
      label: "Выполненный объем по 10-дневной статистике",
      value: "1 319 500 000 Rp",
      percentage: "25%",
      icon: FiBarChart,
      showProgress: true,
    },
  ];

  return (
    <div className="mb-8">
      {/* Tabs */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table Layout */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Mobile View */}
        <div className="block xl:hidden">
          <div className="space-y-4 p-4">
            {/* First Column Data */}
            <div className="space-y-3">
              {firstColumnData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Second Column Data */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              {secondColumnData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Third Column Data */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              {thirdColumnData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Fourth Column Data */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              {fourthColumnData.map((item, index) => (
                <div key={index} className="py-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {item.label}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-600">
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                  {item.showProgress && (
                    <div className="mt-2 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-4 divide-x divide-gray-200">
            {/* First Column */}
            <div className="p-6">
              <div className="space-y-4">
                {firstColumnData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Column */}
            <div className="p-6">
              <div className="space-y-4">
                {secondColumnData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Column */}
            <div className="p-6">
              <div className="space-y-4">
                {thirdColumnData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fourth Column */}
            <div className="p-6">
              <div className="space-y-4">
                {fourthColumnData.map((item, index) => (
                  <div key={index} className="py-3">
                    <div className="mb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <item.icon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-900">
                          {item.value}
                        </span>
                        <span className="text-sm text-gray-600">
                          {item.percentage}
                        </span>
                      </div>
                      {item.showProgress && (
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full transition-all duration-300"
                            style={{ width: item.percentage }}
                          ></div>
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
