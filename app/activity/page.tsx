import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActivityLogPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Activity Log</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Track your recent actions and events</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Your recent activity will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

