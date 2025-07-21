import {
  FiMoreHorizontal,
  FiDollarSign,
  FiCreditCard,
  FiTrendingDown,
  FiTrendingUp,
  FiBriefcase,
  FiAlertTriangle,
} from "react-icons/fi";

interface ProjectStat {
  label: string;
  value: string;
  icon: string;
}

interface ProjectSummaryCardProps {
  title: string;
  contractNumber: string;
  startDate: string;
  endDate: string;
  nagtProgress: number;
  nagtColor: "success" | "warning" | "danger";
  allProgress: number;
  allColor: "success" | "warning" | "danger";
  stats: ProjectStat[];
  penaltyPerDay?: string;
  penaltyMax?: string;
}

const ProjectSummaryCard = ({
  title,
  contractNumber,
  startDate,
  endDate,
  nagtProgress,
  nagtColor,
  allProgress,
  allColor,
  stats,
  penaltyPerDay = "50 000 000 Rp",
  penaltyMax = "500 000 000 Rp",
}: ProjectSummaryCardProps) => {
  const getProgressColorClass = (color: string) => {
    switch (color) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "danger":
        return "bg-red-500";
      default:
        return "bg-green-500";
    }
  };

  const getStatIcon = (iconType: string) => {
    const iconClass = "h-4 w-4 text-gray-400";
    switch (iconType) {
      case "money":
        return <FiDollarSign className={iconClass} />;
      case "paid":
        return <FiCreditCard className={iconClass} />;
      case "income":
        return <FiTrendingDown className={iconClass} />;
      case "profit":
        return <FiTrendingUp className={iconClass} />;
      case "balance":
        return <FiBriefcase className={iconClass} />;
      case "penalty":
        return <FiAlertTriangle className={iconClass} />;
      default:
        return <FiDollarSign className={iconClass} />;
    }
  };

  // Calculate days based on progress
  const totalDays = 365;
  const passedDays = Math.floor((allProgress / 100) * totalDays);
  const remainingDays = totalDays - passedDays;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h3 className="text-base font-medium">{title}</h3>
        <button className="p-1 hover:bg-gray-700 rounded transition-colors">
          <FiMoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Contract Info */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-sm text-gray-600">Контракт</span>
            <span className="text-sm font-medium text-gray-900">
              {contractNumber}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-sm text-gray-600">Старт / завершение</span>
            <span className="text-sm text-gray-900">
              {startDate} - {endDate}
            </span>
          </div>
        </div>

        {/* BAST Progress */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">BAST</span>
            <span className="text-sm font-medium text-gray-900">
              {nagtProgress}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColorClass(
                nagtColor
              )} rounded-full transition-all duration-300`}
              style={{ width: `${nagtProgress}%` }}
            />
          </div>
        </div>

        {/* Days Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Всего - прошло - осталось
            </span>
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-gray-400">{totalDays}</span>
              <span className="text-gray-600">{passedDays}</span>
              <span className="font-medium text-gray-900">{remainingDays}</span>
            </div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColorClass(
                allColor
              )} rounded-full transition-all duration-300`}
              style={{ width: `${allProgress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-3 pt-2">
          {stats.slice(0, 6).map((stat, index) => {
            const isNegative = stat.value.includes("-");

            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatIcon(stat.icon)}
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <span
                  className={`text-sm font-medium ${
                    isNegative ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* Penalty Info */}
        <div className="pt-4 border-t border-gray-100 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FiAlertTriangle className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">За 1 день просрочки</span>
            </div>
            <span className="text-sm text-gray-500">{penaltyPerDay}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FiAlertTriangle className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">Максимально</span>
            </div>
            <span className="text-sm text-gray-500">{penaltyMax}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummaryCard;
