import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AdminUsers() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Admin Users</h1>
          <p className="page-subtitle">Manage admin users and permissions</p>
        </div>
        <Button className="button-primary gap-2">
          <Plus className="w-4 h-4" />
          Add Admin
        </Button>
      </div>
      <Card className="stat-card">
        <div className="card-body">
          <div className="empty-state">
            <div className="empty-state-icon">👤</div>
            <h3 className="empty-state-title">No admin users</h3>
            <p className="empty-state-description">Admin users will appear here</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
