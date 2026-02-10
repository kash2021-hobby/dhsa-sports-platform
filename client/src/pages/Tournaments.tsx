import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Tournaments() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Tournaments</h1>
          <p className="page-subtitle">Manage all tournaments and events</p>
        </div>
        <Button className="button-primary gap-2">
          <Plus className="w-4 h-4" />
          Create Tournament
        </Button>
      </div>

      <Card className="stat-card">
        <div className="card-body">
          <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <h3 className="empty-state-title">No tournaments yet</h3>
            <p className="empty-state-description">Create your first tournament to get started</p>
            <Button className="button-primary">Create Tournament</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
