import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContractCardProps {
  title: string;
  contractNumber: string;
  dateRange: string;
  status: string;
  progress: number;
  metrics: {
    total: string;
    paid: string;
    remaining: string;
    profit: string;
    balance: string;
    penalties: string;
  };
}

export function ContractCard({ 
  title, 
  contractNumber, 
  dateRange, 
  status, 
  progress, 
  metrics 
}: ContractCardProps) {
  const isHighProgress = progress >= 70;
  
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground">
            <span>Контракт: {contractNumber}</span>
            <span>Старт/завершение: {dateRange}</span>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">{status}</span>
          <span className="text-sm font-semibold">{progress}%</span>
        </div>
        <Progress 
          value={progress} 
          className={`h-2 ${isHighProgress ? '[&>[data-state=complete-indicator]]:bg-success' : '[&>[data-state=complete-indicator]]:bg-warning'}`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Стоимость</span>
          <span className="font-medium">{metrics.total}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Оплачено</span>
          <span className="font-medium">{metrics.paid}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Прочие доходы</span>
          <span className="font-medium">{metrics.remaining}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Полож. с прибыли</span>
          <span className="font-medium">{metrics.profit}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Баланс</span>
          <span className="font-semibold">{metrics.balance}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Штрафы на сегодня</span>
          <span className="font-medium">{metrics.penalties}</span>
        </div>
      </div>
    </Card>
  );
}