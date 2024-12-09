"use client"

import { useSearch } from "../components/search-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const { searchTerm } = useSearch()

  if (searchTerm) return null

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome, Jane Doe</h1>
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Overview</CardTitle>
          <CardDescription>Your activity at a glance</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Here you can see an overview of your recent activities and important notifications.</p>
        </CardContent>
      </Card>
    </div>
  )
}

