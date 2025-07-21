import { useState } from "react";
import { 
  Building2, 
  CreditCard, 
  PieChart, 
  FileText, 
  Settings, 
  Users, 
  BarChart3,
  Wallet,
  Calculator,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "ФИНАНСЫ - СОФТ ДЕПАРТАМЕНТ",
    items: [
      { name: "Транзакции", icon: CreditCard, active: false },
      { name: "Прочие расходы / доходы", icon: PieChart, active: true },
      { name: "Операц.денежные расходы", icon: Wallet, active: false },
      { name: "Калькулятор отчетов", icon: Calculator, active: false },
    ]
  },
  {
    title: "ТЕХНИЧЕСКИЙ ДЕПАРТАМЕНТ",
    items: [
      { name: "Управление проектами", icon: Building2, active: false },
      { name: "Проекты", icon: FileText, active: false },
      { name: "Склад", icon: BarChart3, active: false },
      { name: "Поставщики", icon: Users, active: false },
      { name: "Рабочие", icon: Users, active: false },
      { name: "ПЛАН", icon: PieChart, active: false },
    ]
  },
  {
    title: "HR ДЕПАРТАМЕНТ",
    items: [
      { name: "Панель руководителя", icon: Settings, active: false },
      { name: "Финансовый обзор", icon: BarChart3, active: false },
    ]
  }
];

interface AppSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AppSidebar({ isOpen, onToggle }: AppSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full bg-financial-dark text-sidebar-foreground z-50 transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-0 lg:w-16",
        "lg:relative lg:z-auto"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <div className={cn("flex items-center space-x-2", !isOpen && "lg:justify-center")}>
              <Building2 className="h-6 w-6 text-primary" />
              {isOpen && (
                <span className="font-semibold text-sm">EURASTROY V 1.0</span>
              )}
            </div>
            <button
              onClick={onToggle}
              className="lg:hidden p-1 rounded-md hover:bg-sidebar-accent"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            {navigationItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                {isOpen && (
                  <h3 className="px-4 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {section.title}
                  </h3>
                )}
                <div className="space-y-1 px-2">
                  {section.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className={cn(
                        "w-full flex items-center space-x-3 p-2 rounded-md text-sm transition-colors",
                        item.active 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-sidebar-accent text-sidebar-foreground",
                        !isOpen && "lg:justify-center lg:space-x-0"
                      )}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {isOpen && <span className="truncate">{item.name}</span>}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}