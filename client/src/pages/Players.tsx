import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Players() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Players</h1>
          <p className="page-subtitle">Manage all registered players</p>
        </div>
        <Button className="button-primary gap-2">
          <Plus className="w-4 h-4" />
          Add Player
        </Button>
      </div>

      <Card className="stat-card">
        <div className="card-body">
          <div className="empty-state">
            <div className="empty-state-icon">🏃</div>
            <h3 className="empty-state-title">No players registered</h3>
            <p className="empty-state-description">Players will appear here once they register</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
