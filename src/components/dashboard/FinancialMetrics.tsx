import { Card } from "@/components/ui/card";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  PieChart,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

function MetricCard({ icon: Icon, label, value, trend = "neutral", className }: MetricCardProps) {
  return (
    <Card className={cn("p-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{label}</span>
        </div>
        {trend !== "neutral" && (
          <div className={cn(
            "flex items-center space-x-1",
            trend === "up" ? "text-success" : "text-destructive"
          )}>
            {trend === "up" ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
          </div>
        )}
      </div>
      <div className="mt-2">
        <span className="text-xl font-semibold">{value}</span>
      </div>
    </Card>
  );
}

export function FinancialMetrics() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          icon={DollarSign}
          label="Всего контрактов на сумму"
          value="5 278 000 000 Rp"
          trend="up"
        />
        <MetricCard
          icon={Wallet}
          label="Всего оплачено клиентами"
          value="320 000 000 Rp"
        />
        <MetricCard
          icon={PieChart}
          label="Всего прочих расходов"
          value="3 680 000 000 Rp"
        />
        <MetricCard
          icon={BarChart3}
          label="Всего налогов прибыли"
          value="1 598 000 000 Rp"
        />
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Баланс клиентов</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Всего контрактов на сумму</span>
              <span className="font-semibold">5 278 000 000 Rp</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Всего оплачено клиентами</span>
              <span className="font-semibold">320 000 000 Rp</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Всего прочих расходов</span>
              <span className="font-semibold">3 680 000 000 Rp</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Всего налогов прибыли</span>
              <span className="font-semibold">1 598 000 000 Rp</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium">Баланс клиентов</span>
                <span className="font-bold">1 598 000 000 Rp</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Разность баланса</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Выполненный объем</span>
              <span className="font-semibold">0 Rp</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Выбран на сумму</span>
              <span className="font-semibold">7 560 000 000 Rp</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Выбрать фильтр на сумму</span>
              <span className="font-semibold">12 600 000 000 Rp</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium">Документы</span>
                <span className="font-bold">1 119 500 000 Rp</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}