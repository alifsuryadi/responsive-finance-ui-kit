import ProjectSummaryCard from '../dashboard/ProjectSummaryCard';
import KpiSection from '../dashboard/KpiSection';
import ExpensesTable from '../dashboard/ExpensesTable';

const DashboardContent = () => {
  const project1Data = {
    title: "PT Alex Estate Production",
    contractNumber: "001-06/IV/MBI-2025",
    startDate: "25.01.2024",
    endDate: "25.01.2025",
    nagtProgress: 28,
    nagtColor: "danger" as const,
    allProgress: 70,
    allColor: "success" as const,
    stats: [
      { label: "Стоимость", value: "5 000 000 000 Rp", icon: "money" },
      { label: "Оплачено", value: "1 40 000 000 Rp", icon: "paid" },
      { label: "Прочие доходы", value: "3 590 000 000 Rp", icon: "income" },
      { label: "Доходы с прибыли", value: "540 000 000 Rp", icon: "profit" },
      { label: "Баланс", value: "-1 360 000 000 Rp", icon: "balance" },
      { label: "Штраф на сегодня", value: "0 Rp", icon: "penalty" },
    ]
  };

  const project2Data = {
    title: "PT Amadeus Rock Reality",
    contractNumber: "002-08/IV/MBI-2024",
    startDate: "25.03.2024",
    endDate: "25.08.2024",
    nagtProgress: 70,
    nagtColor: "success" as const,
    allProgress: 100,
    allColor: "success" as const,
    stats: [
      { label: "Стоимость", value: "278 000 000 Rp", icon: "money" },
      { label: "Оплачено", value: "180 000 000 Rp", icon: "paid" },
      { label: "Прочие доходы", value: "118 000 000 Rp", icon: "income" },
      { label: "Доходы с прибыли", value: "98 000 000 Rp", icon: "profit" },
      { label: "Баланс", value: "-98 000 000 Rp", icon: "balance" },
      { label: "Штраф на сегодня", value: "0 Rp", icon: "penalty" },
    ]
  };

  return (
    <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="text-sm text-text-muted">
          <span>Финансовый департамент</span>
          <span className="mx-2">›</span>
          <span>Транзакции</span>
          <span className="mx-2">›</span>
          <span className="text-text-primary">Ценовые расходы</span>
        </nav>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <ProjectSummaryCard {...project1Data} />
        <ProjectSummaryCard {...project2Data} />
      </div>

      {/* KPI Section */}
      <KpiSection />

      {/* Expenses Table */}
      <ExpensesTable />
    </main>
  );
};

export default DashboardContent;