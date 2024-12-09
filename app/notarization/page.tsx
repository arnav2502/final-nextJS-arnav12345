import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotarizationPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Notarization</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notarization Services</CardTitle>
          <CardDescription>Manage your notarization needs</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Access our notarization services and manage your documents here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

