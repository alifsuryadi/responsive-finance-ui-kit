import { useState } from "react";
import {
  FiDownload,
  FiUpload,
  FiMoreVertical,
  FiPaperclip,
  FiCopy,
  FiEdit,
  FiTrash,
  FiChevronDown,
} from "react-icons/fi";

const ExpensesTable = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "Все транзакции" },
    { id: "paid", label: "Оплаченные" },
    { id: "confirmed", label: "Подтвержденные" },
    { id: "pending", label: "В ожидании" },
  ];

  const tableData = [
    {
      name: "Besi Beton ulir D16",
      supplier: "CV Bulana Makmur",
      project: "PT Alex Estate",
      fund: "4.3.2.",
      category: "4.3.2.1.",
      employee: "Alex Sanbayev",
      recipient: "BCA 134432...",
      unitPrice: "178 000 Rp",
      quantity: "150",
      unit: "pcs",
      totalAmount: "26 700 000 Rp",
      paymentDate: "25.05.2025",
      documents: true,
    },
    {
      name: "Besi Beton ulir D16",
      supplier: "CV Bulana Makmur",
      project: "PT Alex Estate",
      fund: "4.3.2.",
      category: "4.3.2.1.",
      employee: "Alex Sanbayev",
      recipient: "BCA 134432...",
      unitPrice: "178 000 Rp",
      quantity: "150",
      unit: "pcs",
      totalAmount: "26 700 000 Rp",
      paymentDate: "25.05.2025",
      documents: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Top Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors">
              Создать транзакцию
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <FiDownload className="h-4 w-4" />
              <span className="hidden sm:inline">EXPORT</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <FiUpload className="h-4 w-4" />
              <span className="hidden sm:inline">IMPORT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Прямые расходы</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1400px]">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Наименование
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Поставщик
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Проект
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Фонд
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Категория
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Сотрудник
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Получатель
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Цена за 1 ед
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Кол-во
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Ед. изм.
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Сумма оплаты
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Дата оплаты
                  </span>
                  <FiChevronDown className="h-3 w-3 cursor-pointer hover:text-gray-300" />
                </div>
              </th>
              <th className="px-4 py-3 text-center">
                <span className="text-xs font-medium uppercase tracking-wider">
                  Документы
                </span>
              </th>
              <th className="px-4 py-3 text-center">
                <span className="text-xs font-medium uppercase tracking-wider">
                  Настройки
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{row.name}</td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {row.supplier}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {row.project}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">{row.fund}</td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {row.category}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {row.employee}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {row.recipient}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {row.unitPrice}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {row.quantity}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">{row.unit}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {row.totalAmount}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100">
                    {row.paymentDate}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  <div className="flex items-center justify-center space-x-2">
                    <button className="hover:text-gray-600 transition-colors">
                      <FiPaperclip className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="hover:text-gray-600 transition-colors">
                      <FiCopy className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="hover:text-gray-600 transition-colors">
                      <FiEdit className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="hover:text-red-500 transition-colors">
                      <FiTrash className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="inline-flex items-center justify-center p-1 rounded hover:bg-gray-100 transition-colors">
                    <FiMoreVertical className="h-4 w-4 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensesTable;
