import { useState } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { ContractCard } from "@/components/dashboard/ContractCard";
import { FinancialMetrics } from "@/components/dashboard/FinancialMetrics";
import { TransactionTable } from "@/components/dashboard/TransactionTable";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const contractData = [
    {
      title: "PT Alex Estate Production",
      contractNumber: "001-06/IV/MBI-2025",
      dateRange: "25.01.2024 - 25.01.2025",
      status: "ПЛАН",
      progress: 28,
      metrics: {
        total: "5 000 000 000 Rp",
        paid: "140 000 000 Rp",
        remaining: "3 340 000 000 Rp",
        profit: "340 000 000 Rp",
        balance: "-1 360 000 000 Rp",
        penalties: "0 Rp"
      }
    },
    {
      title: "PT Amadeus Rock Reality",
      contractNumber: "002-08/IV/MBI-2024",
      dateRange: "25.03.2024 - 25.08.2024",
      status: "ПЛАН",
      progress: 70,
      metrics: {
        total: "278 000 000 Rp",
        paid: "180 000 000 Rp",
        remaining: "180 000 000 Rp",
        profit: "98 000 000 Rp",
        balance: "-98 000 000 Rp",
        penalties: "0 Rp"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AppSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        <div className="flex-1 flex flex-col min-h-screen">
          <AppHeader onToggleSidebar={toggleSidebar} />
          
          <main className="flex-1 p-4 lg:p-6 space-y-6">
            {/* Contract Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {contractData.map((contract, index) => (
                <ContractCard key={index} {...contract} />
              ))}
            </div>

            {/* Financial Metrics */}
            <FinancialMetrics />

            {/* Transaction Table */}
            <TransactionTable />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
