import { FiDownload, FiUpload } from 'react-icons/fi';

const ExpensesTable = () => {
  const tabs = [
    { id: 'all', label: 'Все транзакции', active: true },
    { id: 'contractors', label: 'Подрядчикам', active: false },
    { id: 'suppliers', label: 'Поставщикам', active: false },
    { id: 'pending', label: 'В ожидании', active: false },
  ];

  const tableData = [
    {
      type: 'Besi Beton ulir D16',
      article: 'CV Bulana Makmur',
      project: 'PT Alex Estate',
      fund: '4.3.2',
      category: '4.3.2.1',
      employee: 'Alex Sanbaev',
      unit: 'BCA 154423',
      quantity: '178 000 Rp',
      measure: '150',
      unitType: 'pcs',
      amount: '26 700 000 Rp',
      paymentDate: '23.05.2025',
      documents: '1 file',
      settings: true
    },
    {
      type: 'Besi Beton ulir D16',
      article: 'CV Bulana Makmur',
      project: 'PT Alex Estate',
      fund: '4.3.2',
      category: '4.3.2.1',
      employee: 'Alex Sanbaev',
      unit: 'BCA 154423',
      quantity: '178 000 Rp',
      measure: '150',
      unitType: 'pcs',
      amount: '26 700 000 Rp',
      paymentDate: '22.05.2025',
      documents: '1 file',
      settings: true
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-card-border">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-card-border">
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-card-foreground">Прямые расходы</h2>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button className="bg-button-success text-button-success-foreground px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-green-600 transition-colors">
              Создать транзакцию
            </button>
            <button className="flex items-center justify-center space-x-2 bg-button-secondary text-button-secondary-foreground px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors">
              <FiDownload className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>ЭКСПОРТ</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-button-secondary text-button-secondary-foreground px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors">
              <FiUpload className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>ИМПОРТ</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-2 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab.active
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <table className="w-full min-w-[1200px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Наименование
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Поставщик
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Проект
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Фонд
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Категория
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Сотрудник
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Получатель
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Цена Ед Изм
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Кол-во
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Ед. изм
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Сумма оплаты
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Дата оплаты
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Документы
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">
                  Настройки
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-card-border">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.type}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.article}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.project}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.fund}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.category}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.employee}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.unit}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.quantity}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.measure}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.unitType}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-text-primary">
                    {row.amount}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    {row.paymentDate}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    <span className="text-primary cursor-pointer hover:underline">
                      {row.documents}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-text-primary">
                    <button className="text-text-muted hover:text-text-primary">
                      ⚙️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpensesTable;