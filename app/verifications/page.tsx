import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VerificationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Previous Verifications</h1>
      <Card>
        <CardHeader>
          <CardTitle>Verification History</CardTitle>
          <CardDescription>Review your past verifications</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Your verification history will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

