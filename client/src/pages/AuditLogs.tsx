import { Card } from "@/components/ui/card";

export default function AuditLogs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Audit Logs</h1>
        <p className="page-subtitle">View system audit logs and activity</p>
      </div>
      <Card className="stat-card">
        <div className="card-body">
          <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <h3 className="empty-state-title">No audit logs</h3>
            <p className="empty-state-description">System activity will appear here</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
