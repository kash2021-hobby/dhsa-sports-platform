import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function Financial() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Financial Reports</h1>
        <p className="page-subtitle">View financial data and reports</p>
      </div>
      <Card className="stat-card">
        <div className="card-body">
          <div className="empty-state">
            <div className="empty-state-icon">💰</div>
            <h3 className="empty-state-title">No financial data</h3>
            <p className="empty-state-description">Financial reports will appear here</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
