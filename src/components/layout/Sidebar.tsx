import {
  FiMenu,
  FiBarChart,
  FiDollarSign,
  FiCreditCard,
  FiActivity,
  FiTarget,
  FiFolderPlus,
  FiTrendingUp,
  FiUsers,
  FiSettings,
  FiChevronDown,
  FiChevronRight,
  FiCalendar,
  FiBox,
  FiTruck,
  FiHardDrive,
  FiFileText,
  FiUserCheck,
  FiBriefcase,
  FiUserPlus,
  FiClipboard,
  FiBookOpen,
  FiFolder,
  FiShield,
  FiAward,
  FiHome,
  FiPieChart,
  FiClock,
  FiUserX,
} from "react-icons/fi";
import { HiOutlineChartBar } from "react-icons/hi";
import { useState } from "react";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar = ({
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) => {
  const [financialExpanded, setFinancialExpanded] = useState(true);
  const [technicalExpanded, setTechnicalExpanded] = useState(false);
  const [hrExpanded, setHrExpanded] = useState(false);
  const [legalExpanded, setLegalExpanded] = useState(false);
  const [strategyExpanded, setStrategyExpanded] = useState(false);

  const financialItems = [
    { icon: FiBarChart, label: "Транзакции", active: false },
    { icon: FiDollarSign, label: "Прямые расходы / доходы", active: true },
    { icon: FiActivity, label: "Операционные расходы", active: false },
    { icon: FiCalendar, label: "Календарь отчетов", active: false },
  ];

  const technicalItems = [
    { icon: FiSettings, label: "Управление проектами", active: false },
    { icon: FiFolderPlus, label: "Проекты", active: false },
    { icon: FiBox, label: "Склад", active: false },
    { icon: FiTruck, label: "Поставщики", active: false },
    { icon: HiOutlineChartBar, label: "Рабочие", active: false },
    { icon: FiFileText, label: "BAST", active: false },
    { icon: FiClipboard, label: "PBO / SLF / HGB", active: false },
  ];

  const hrItems = [
    { icon: FiUsers, label: "Кадровые ресурсы", active: false },
    { icon: FiBriefcase, label: "Вакансии", active: false },
    { icon: FiUserPlus, label: "Кандидаты", active: false },
    { icon: FiFileText, label: "Контракты", active: false },
    { icon: FiBookOpen, label: "Адаптация и обучение", active: false },
    { icon: FiFolder, label: "Документы сотрудников", active: false },
  ];

  const legalItems = [
    { icon: FiFileText, label: "Контракты", active: false },
    { icon: FiUserCheck, label: "Клиенты", active: false },
    { icon: FiHardDrive, label: "Подрядчики", active: false },
    { icon: FiTruck, label: "Поставщики", active: false },
    { icon: FiUsers, label: "Сотрудники", active: false },
    { icon: FiShield, label: "Партнеры", active: false },
    { icon: FiAward, label: "Лицензии компании", active: false },
    { icon: FiFolder, label: "Документы компании", active: false },
  ];

  const strategyItems = [
    { icon: FiHome, label: "Панель руководителя", active: false },
    { icon: FiPieChart, label: "Финансовый обзор", active: false },
    { icon: FiClock, label: "Хронология проекта", active: false },
    { icon: FiUserX, label: "Статус сотрудников", active: false },
  ];

  // Representative icons for collapsed state
  const financialIcon = FiBarChart;
  const technicalIcon = FiSettings;
  const hrIcon = FiUsers;
  const legalIcon = FiFileText;
  const strategyIcon = FiHome;

  type SidebarItem = {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    active: boolean;
  };

  const renderSection = (
    title: string,
    items: SidebarItem[],
    expanded: boolean,
    setExpanded: (value: boolean) => void,
    icon: React.ComponentType<{ className?: string }>
  ) => {
    if (isCollapsed) {
      return (
        <a
          href="#"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
          title={title}
        >
          {React.createElement(icon, {
            className: "h-4 w-4 mx-auto",
          })}
        </a>
      );
    }

    return (
      <>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full px-2 mb-3 text-gray-500 hover:text-gray-300 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">{title}</span>
          {expanded ? (
            <FiChevronDown className="h-3 w-3" />
          ) : (
            <FiChevronRight className="h-3 w-3" />
          )}
        </button>
        {expanded && (
          <div className="space-y-1">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.active
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        )}
      </>
    );
  };

  const sidebarContent = (
    <>
      <div className="flex items-center flex-shrink-0 px-4 py-6">
        <button
          onClick={onToggleCollapse}
          className="text-gray-400 text-lg mr-3 hover:text-white transition-colors"
        >
          <FiMenu />
        </button>
        {!isCollapsed && (
          <span className="text-white font-semibold text-sm">
            EURASTROY V.1.0
          </span>
        )}
      </div>

      <nav className="flex-1 pl-1 pb-4 space-y-4 overflow-y-auto sidebar-scrollbar">
        {/* Financial Department */}
        <div>
          {renderSection(
            "ФИНАНСОВЫЙ ДЕПАРТАМЕНТ",
            financialItems,
            financialExpanded,
            setFinancialExpanded,
            financialIcon
          )}
        </div>

        {/* Technical Department */}
        <div>
          {renderSection(
            "ТЕХНИЧЕСКИЙ ДЕПАРТАМЕНТ",
            technicalItems,
            technicalExpanded,
            setTechnicalExpanded,
            technicalIcon
          )}
        </div>

        {/* HR Department */}
        <div>
          {renderSection(
            "HR ДЕПАРТАМЕНТ",
            hrItems,
            hrExpanded,
            setHrExpanded,
            hrIcon
          )}
        </div>

        {/* Legal Department */}
        <div>
          {renderSection(
            "ЮРИДИЧЕСКИЙ ДЕПАРТАМЕНТ",
            legalItems,
            legalExpanded,
            setLegalExpanded,
            legalIcon
          )}
        </div>

        {/* Operational Strategy */}
        <div>
          {renderSection(
            "ОПЕРАЦИОННАЯ СТРАТЕГИЯ",
            strategyItems,
            strategyExpanded,
            setStrategyExpanded,
            strategyIcon
          )}
        </div>
      </nav>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 transition-all duration-300 bg-gray-900 ${
          isCollapsed ? "lg:w-16" : "lg:w-64"
        }`}
      >
        <div className="flex flex-col flex-grow overflow-y-auto">
          {sidebarContent}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between flex-shrink-0 px-4 py-6">
            <div className="flex items-center">
              <FiMenu className="text-gray-400 text-lg mr-3" />
              <span className="text-white font-semibold text-sm">
                EURASTROY V.1.0
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 px-2 pb-4 space-y-4 overflow-y-auto">
            {/* Financial Department */}
            <div>
              <button
                onClick={() => setFinancialExpanded(!financialExpanded)}
                className="flex items-center justify-between w-full px-2 mb-3 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="text-xs uppercase tracking-wider">
                  ФИНАНСОВЫЙ ДЕПАРТАМЕНТ
                </span>
                {financialExpanded ? (
                  <FiChevronDown className="h-3 w-3" />
                ) : (
                  <FiChevronRight className="h-3 w-3" />
                )}
              </button>
              {financialExpanded && (
                <div className="space-y-1">
                  {financialItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={onClose}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                        item.active
                          ? "bg-blue-600 text-white"
                          : "text-gray-400 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Technical Department */}
            <div>
              <button
                onClick={() => setTechnicalExpanded(!technicalExpanded)}
                className="flex items-center justify-between w-full px-2 mb-3 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="text-xs uppercase tracking-wider">
                  ТЕХНИЧЕСКИЙ ДЕПАРТАМЕНТ
                </span>
                {technicalExpanded ? (
                  <FiChevronDown className="h-3 w-3" />
                ) : (
                  <FiChevronRight className="h-3 w-3" />
                )}
              </button>
              {technicalExpanded && (
                <div className="space-y-1">
                  {technicalItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={onClose}
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* HR Department */}
            <div>
              <button
                onClick={() => setHrExpanded(!hrExpanded)}
                className="flex items-center justify-between w-full px-2 mb-3 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="text-xs uppercase tracking-wider">
                  HR ДЕПАРТАМЕНТ
                </span>
                {hrExpanded ? (
                  <FiChevronDown className="h-3 w-3" />
                ) : (
                  <FiChevronRight className="h-3 w-3" />
                )}
              </button>
              {hrExpanded && (
                <div className="space-y-1">
                  {hrItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={onClose}
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Legal Department */}
            <div>
              <button
                onClick={() => setLegalExpanded(!legalExpanded)}
                className="flex items-center justify-between w-full px-2 mb-3 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="text-xs uppercase tracking-wider">
                  ЮРИДИЧЕСКИЙ ДЕПАРТАМЕНТ
                </span>
                {legalExpanded ? (
                  <FiChevronDown className="h-3 w-3" />
                ) : (
                  <FiChevronRight className="h-3 w-3" />
                )}
              </button>
              {legalExpanded && (
                <div className="space-y-1">
                  {legalItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={onClose}
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Operational Strategy */}
            <div>
              <button
                onClick={() => setStrategyExpanded(!strategyExpanded)}
                className="flex items-center justify-between w-full px-2 mb-3 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="text-xs uppercase tracking-wider">
                  ОПЕРАЦИОННАЯ СТРАТЕГИЯ
                </span>
                {strategyExpanded ? (
                  <FiChevronDown className="h-3 w-3" />
                ) : (
                  <FiChevronRight className="h-3 w-3" />
                )}
              </button>
              {strategyExpanded && (
                <div className="space-y-1">
                  {strategyItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={onClose}
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-20 bg-black bg-opacity-50"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
