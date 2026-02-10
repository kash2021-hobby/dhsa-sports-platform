import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage system settings and configuration</p>
      </div>
      
      <Card className="stat-card">
        <div className="card-header">
          <h2 className="card-title">General Settings</h2>
        </div>
        <div className="card-body space-y-6">
          <div className="form-group">
            <label className="form-label">Platform Name</label>
            <input type="text" className="form-input" placeholder="DHSA Sports Platform" />
          </div>
          <div className="form-group">
            <label className="form-label">Support Email</label>
            <input type="email" className="form-input" placeholder="support@dhsa.com" />
          </div>
        </div>
        <div className="card-footer">
          <Button className="button-primary">Save Changes</Button>
        </div>
      </Card>
    </div>
  );
}
