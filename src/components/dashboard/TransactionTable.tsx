import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Download, Upload, Settings } from "lucide-react";

interface Transaction {
  id: string;
  nomenclature: string;
  supplier: string;
  project: string;
  fund: string;
  category: string;
  contractor: string;
  amount: string;
  unit: string;
  total: string;
  date: string;
  docs: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    nomenclature: "Besi Beton Ulir D16",
    supplier: "CV Bulana Malang",
    project: "PT Alex Estate...",
    fund: "4.3.2",
    category: "4.3.2.1",
    contractor: "Alex Sanbaev",
    amount: "178 000 Rp",
    unit: "150",
    total: "26 700 000 Rp",
    date: "23.05.2023",
    docs: "13"
  },
  {
    id: "2",
    nomenclature: "Besi Beton Ulir D16",
    supplier: "CV Bulana Malang",
    project: "PT Alex Estate...",
    fund: "4.3.2",
    category: "4.3.2.1",
    contractor: "Alex Sanbaev",
    amount: "178 000 Rp",
    unit: "150",
    total: "26 700 000 Rp",
    date: "23.05.2023",
    docs: "13"
  }
];

export function TransactionTable() {
  return (
    <Card className="p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
        <h3 className="text-lg font-semibold">Прямые расходы</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            Все транзакции
          </Button>
          <Button variant="outline" size="sm">
            Отложенные
          </Button>
          <Button variant="outline" size="sm">
            Примененные
          </Button>
          <Button variant="outline" size="sm">
            В ожидании
          </Button>
          <Button variant="default" size="sm" className="bg-success hover:bg-success/90">
            Создать транзакцию
          </Button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Наименование Т</TableHead>
              <TableHead>Поставщик Т</TableHead>
              <TableHead>Проект Т</TableHead>
              <TableHead>Фонд Т</TableHead>
              <TableHead>Категории Т</TableHead>
              <TableHead>Сотрудник Т</TableHead>
              <TableHead>Получатель Т</TableHead>
              <TableHead>Ед. изм.</TableHead>
              <TableHead>Сумма оплаты Т</TableHead>
              <TableHead>Дата оплаты Т</TableHead>
              <TableHead>Документы</TableHead>
              <TableHead>Настройки</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.nomenclature}</TableCell>
                <TableCell>{transaction.supplier}</TableCell>
                <TableCell>{transaction.project}</TableCell>
                <TableCell>{transaction.fund}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.contractor}</TableCell>
                <TableCell>BCA 154425...</TableCell>
                <TableCell>
                  <Badge variant="secondary">pcs</Badge>
                </TableCell>
                <TableCell className="font-semibold">{transaction.total}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {transactions.map((transaction) => (
          <Card key={transaction.id} className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-sm">{transaction.nomenclature}</h4>
                <Badge variant="secondary" className="text-xs">pcs</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Поставщик:</span>
                  <p className="font-medium">{transaction.supplier}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Проект:</span>
                  <p className="font-medium">{transaction.project}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-muted-foreground text-sm">Сумма:</span>
                  <p className="font-semibold">{transaction.total}</p>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground text-sm">Дата:</span>
                  <p className="font-medium">{transaction.date}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t">
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4 mr-1" />
                  Документы
                </Button>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Export Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t space-y-2 sm:space-y-0">
        <div className="text-sm text-muted-foreground">
          Показано 2 из 2 записей
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            EXPORT
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-1" />
            IMPORT
          </Button>
        </div>
      </div>
    </Card>
  );
}