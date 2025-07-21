import { FiMenu, FiBarChart, FiDollarSign, FiCreditCard, FiActivity, FiTarget, FiFolderPlus, FiTrendingUp, FiUsers, FiSettings, FiChevronDown } from 'react-icons/fi';
import { HiOutlineChartBar } from 'react-icons/hi';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { icon: FiBarChart, label: 'Транзакции', active: false },
    { icon: FiDollarSign, label: 'Ценовые расходы', active: true },
    { icon: FiCreditCard, label: 'Управление счетами', active: false },
    { icon: FiActivity, label: 'Операционные расходы', active: false },
    { icon: FiTarget, label: 'Календарь отчетов', active: false },
    { icon: FiFolderPlus, label: 'Проекты', active: false },
    { icon: FiTrendingUp, label: 'Склад', active: false },
    { icon: FiUsers, label: 'Поставщики', active: false },
    { icon: HiOutlineChartBar, label: 'Рабочие', active: false },
    { icon: FiSettings, label: 'ПДСТ', active: false },
  ];

  const technicalItems = [
    { icon: FiTarget, label: 'Управление проектами', active: false },
    { icon: FiTrendingUp, label: 'Проекты', active: false },
    { icon: FiFolderPlus, label: 'Склад', active: false },
    { icon: FiUsers, label: 'Поставщики', active: false },
    { icon: FiSettings, label: 'Рабочие', active: false },
  ];

  const hrItems = [
    { icon: FiUsers, label: 'Панель руководителя', active: false },
    { icon: FiSettings, label: 'Финансовый обзор', active: false },
    { icon: FiTrendingUp, label: 'Хронология проекта', active: false },
    { icon: FiFolderPlus, label: 'Статус сотрудников', active: false },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-sidebar-bg overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 py-6">
            <FiMenu className="text-sidebar-foreground text-lg mr-3" />
            <span className="text-sidebar-foreground font-semibold text-sm">EURASTROY V.1.0</span>
          </div>
          
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {/* Main menu section */}
            <div className="mb-6">
              <div className="text-sidebar-muted text-xs uppercase tracking-wider mb-3 px-3">
                ФИНАL СОВНОД АРТАКМЕНТ
              </div>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.active
                      ? 'bg-sidebar-active text-sidebar-active-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-active hover:text-sidebar-active-foreground'
                  }`}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>

            {/* Technical section */}
            <div className="mb-6">
              <div className="flex items-center justify-between px-3 mb-3">
                <span className="text-sidebar-muted text-xs uppercase tracking-wider">
                  ТЕХНИЧЕСКИЙ ДЕПАРТАМЕНТ
                </span>
                <FiChevronDown className="text-sidebar-muted h-3 w-3" />
              </div>
              {technicalItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-sidebar-active hover:text-sidebar-active-foreground transition-colors"
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>

            {/* HR section */}
            <div className="mb-6">
              <div className="flex items-center justify-between px-3 mb-3">
                <span className="text-sidebar-muted text-xs uppercase tracking-wider">
                  НР ДЕПАРТАМЕНТ
                </span>
                <FiChevronDown className="text-sidebar-muted h-3 w-3" />
              </div>
              {hrItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-sidebar-active hover:text-sidebar-active-foreground transition-colors"
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-30 w-64 bg-sidebar-bg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between flex-shrink-0 px-4 py-6">
            <div className="flex items-center">
              <FiMenu className="text-sidebar-foreground text-lg mr-3" />
              <span className="text-sidebar-foreground font-semibold text-sm">EURASTROY V.1.0</span>
            </div>
            <button onClick={onClose} className="text-sidebar-foreground">
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="flex-1 px-2 pb-4 space-y-1 overflow-y-auto">
            {/* Same menu structure as desktop */}
            <div className="mb-6">
              <div className="text-sidebar-muted text-xs uppercase tracking-wider mb-3 px-3">
                ФИНАL СОВНОД АРТАКМЕНТ
              </div>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={onClose}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.active
                      ? 'bg-sidebar-active text-sidebar-active-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-active hover:text-sidebar-active-foreground'
                  }`}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;