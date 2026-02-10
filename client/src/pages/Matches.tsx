import { Card } from "@/components/ui/card";

export default function Matches() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Matches</h1>
        <p className="page-subtitle">View and manage all matches</p>
      </div>
      <Card className="stat-card">
        <div className="card-body">
          <div className="empty-state">
            <div className="empty-state-icon">🎮</div>
            <h3 className="empty-state-title">No matches scheduled</h3>
            <p className="empty-state-description">Matches will appear here once tournaments are created</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
