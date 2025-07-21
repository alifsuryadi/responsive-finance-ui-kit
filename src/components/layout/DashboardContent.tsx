import ProjectSummaryCard from "../dashboard/ProjectSummaryCard";
import KpiSection from "../dashboard/KpiSection";
import ExpensesTable from "../dashboard/ExpensesTable";

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
      { label: "Оплачено", value: "140 000 000 Rp", icon: "paid" },
      { label: "Прямые расходы", value: "3 500 000 000 Rp", icon: "income" },
      { label: "Валовая прибыль", value: "1 500 000 000 Rp", icon: "profit" },
      { label: "Баланс", value: "-1 360 000 000 Rp", icon: "balance" },
      { label: "Штраф на сегодня", value: "0 Rp", icon: "penalty" },
    ],
    penaltyPerDay: "50 000 000 Rp",
    penaltyMax: "500 000 000 Rp",
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
      { label: "Прямые расходы", value: "180 000 000 Rp", icon: "income" },
      { label: "Валовая прибыль", value: "98 000 000 Rp", icon: "profit" },
      { label: "Баланс", value: "-98 000 000 Rp", icon: "balance" },
      { label: "Штраф на сегодня", value: "0 Rp", icon: "penalty" },
    ],
    penaltyPerDay: "278 000 Rp",
    penaltyMax: "27 800 000 Rp",
  };

  return (
    <main className="flex-1 bg-gray-50 min-h-screen">
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-600">
            <span>Финансовый департамент</span>
            <span className="mx-2">›</span>
            <span>Транзакции</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Прямые расходы</span>
          </nav>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-8">
          <ProjectSummaryCard {...project1Data} />
          <ProjectSummaryCard {...project2Data} />
        </div>

        {/* KPI Section */}
        <KpiSection />

        {/* Expenses Table */}
        <ExpensesTable />
      </div>
    </main>
  );
};

export default DashboardContent;
