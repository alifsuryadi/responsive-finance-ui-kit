import { FiMoreHorizontal, FiDollarSign, FiCreditCard, FiTrendingUp, FiMinus } from 'react-icons/fi';

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
  nagtColor: 'success' | 'warning' | 'danger';
  allProgress: number;
  allColor: 'success' | 'warning' | 'danger';
  stats: ProjectStat[];
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
  stats
}: ProjectSummaryCardProps) => {
  const getProgressColorClass = (color: string) => {
    switch (color) {
      case 'success': return 'bg-progress-success';
      case 'warning': return 'bg-progress-warning';
      case 'danger': return 'bg-progress-danger';
      default: return 'bg-progress-success';
    }
  };

  const getStatIcon = (iconType: string) => {
    switch (iconType) {
      case 'money': return <FiDollarSign className="h-4 w-4" />;
      case 'paid': return <FiCreditCard className="h-4 w-4" />;
      case 'income': return <FiTrendingUp className="h-4 w-4" />;
      case 'profit': return <FiDollarSign className="h-4 w-4" />;
      case 'balance': return <FiMinus className="h-4 w-4" />;
      case 'penalty': return <FiMinus className="h-4 w-4" />;
      default: return <FiDollarSign className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-card rounded-lg border border-card-border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <button className="text-text-muted hover:text-text-primary">
          <FiMoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Contract Info */}
      <div className="mb-4">
        <div className="text-sm text-text-secondary mb-1">Контракт</div>
        <div className="text-sm font-medium text-text-primary">{contractNumber}</div>
        <div className="text-xs text-text-muted mt-1">
          Старт заключения: {startDate} - {endDate}
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-3 mb-6">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-text-secondary">NAGT</span>
            <span className="text-xs font-medium text-text-primary">{nagtProgress}%</span>
          </div>
          <div className="w-full bg-progress-bg rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getProgressColorClass(nagtColor)}`}
              style={{ width: `${nagtProgress}%` }}
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-text-secondary">Все в процессе - остаток</span>
            <span className="text-xs font-medium text-text-primary">{allProgress}%</span>
          </div>
          <div className="w-full bg-progress-bg rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getProgressColorClass(allColor)}`}
              style={{ width: `${allProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-text-muted">
                {getStatIcon(stat.icon)}
              </div>
              <span className="text-sm text-text-secondary">{stat.label}</span>
            </div>
            <span className="text-sm font-medium text-text-primary">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mt-6 pt-4 border-t border-card-border">
        <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors">
          Расходы
        </button>
        <button className="flex-1 bg-button-secondary text-button-secondary-foreground py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
          Подпроекты
        </button>
        <button className="flex-1 bg-button-secondary text-button-secondary-foreground py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
          Создать проект
        </button>
      </div>
    </div>
  );
};

export default ProjectSummaryCard;