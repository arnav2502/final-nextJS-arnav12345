import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
          <CardDescription>Stay updated with your latest notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <p>You have no new notifications at this time.</p>
        </CardContent>
      </Card>
    </div>
  )
}

