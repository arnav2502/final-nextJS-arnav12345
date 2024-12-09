"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSearch } from "@/contexts/search-context"

const settingsCategories = [
  { title: "Account", description: "Manage your account settings and preferences." },
  { title: "Personalization", description: "Customize your experience and preferences." },
  { title: "Storage", description: "Manage your storage and data preferences." },
  { title: "Help", description: "Get help and support." },
  { title: "Accessibility", description: "Manage accessibility settings and preferences." },
  { title: "Security", description: "Manage your security settings and preferences." },
]

export default function SettingsPage() {
  const { searchTerm } = useSearch()

  const filteredCategories = settingsCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      {filteredCategories.map((category, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">Manage {category.title}</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

