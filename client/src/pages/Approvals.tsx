import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Approvals() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="page-title">Approvals</h1>
        <p className="page-subtitle">Review and manage team and player approvals</p>
      </div>

      <Card className="stat-card">
        <div className="card-body">
          <Tabs defaultValue="teams" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="teams">Teams (5)</TabsTrigger>
              <TabsTrigger value="players">Players (12)</TabsTrigger>
              <TabsTrigger value="rosters">Rosters (3)</TabsTrigger>
            </TabsList>

            <TabsContent value="teams" className="mt-6">
              <div className="empty-state">
                <div className="empty-state-icon">👥</div>
                <h3 className="empty-state-title">Pending team approvals</h3>
                <p className="empty-state-description">5 teams awaiting approval</p>
              </div>
            </TabsContent>

            <TabsContent value="players" className="mt-6">
              <div className="empty-state">
                <div className="empty-state-icon">🏃</div>
                <h3 className="empty-state-title">Pending player approvals</h3>
                <p className="empty-state-description">12 players awaiting approval</p>
              </div>
            </TabsContent>

            <TabsContent value="rosters" className="mt-6">
              <div className="empty-state">
                <div className="empty-state-icon">📋</div>
                <h3 className="empty-state-title">Pending roster approvals</h3>
                <p className="empty-state-description">3 rosters awaiting approval</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}
