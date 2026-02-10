import { BarChart3, Trophy, Users, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  const stats = [
    { label: "Total Tournaments", value: "24", icon: Trophy, change: "+12%" },
    { label: "Active Teams", value: "156", icon: Users, change: "+8%" },
    { label: "Total Players", value: "1,872", icon: Users, change: "+15%" },
    { label: "Matches Completed", value: "342", icon: Gamepad2, change: "+5%" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="stat-card">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-change stat-change-positive">{stat.change}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="stat-card">
        <div className="card-header">
          <h2 className="card-title">Recent Activity</h2>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground">Tournament "{`Tournament ${i}`}" published</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <span className="badge-status badge-published">Published</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
