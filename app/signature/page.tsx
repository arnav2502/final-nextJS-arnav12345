import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigitalSignaturePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Digital Signature</h1>
      <Card>
        <CardHeader>
          <CardTitle>Manage Digital Signature</CardTitle>
          <CardDescription>Create and manage your digital signature</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Set up and manage your digital signature for document signing.</p>
        </CardContent>
      </Card>
    </div>
  )
}

