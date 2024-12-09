import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InformationRequestsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Information Requests</h1>
      <Card>
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
          <CardDescription>Review and manage your information requests</CardDescription>
        </CardHeader>
        <CardContent>
          <p>You have no pending information requests at this time.</p>
        </CardContent>
      </Card>
    </div>
  )
}

