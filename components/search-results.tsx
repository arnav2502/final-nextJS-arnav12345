"use client"

import { useSearch } from "@/contexts/search-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const searchableContent = [
  { title: "Account", description: "Manage your account settings and preferences.", link: "/settings" },
  { title: "Personalization", description: "Customize your experience and preferences.", link: "/settings" },
  { title: "Storage", description: "Manage your storage and data preferences.", link: "/settings" },
  { title: "Help", description: "Get help and support.", link: "/settings" },
  { title: "Accessibility", description: "Manage accessibility settings and preferences.", link: "/settings" },
  { title: "Security", description: "Manage your security settings and preferences.", link: "/settings" },
  { title: "Information Requests", description: "Review and manage your information requests", link: "/information-requests" },
  { title: "Notarization", description: "Manage your notarization needs", link: "/notarization" },
  { title: "Notifications", description: "Stay updated with your latest notifications", link: "/notifications" },
  { title: "Previous Verifications", description: "Review your past verifications", link: "/verifications" },
  { title: "Digital Signature", description: "Create and manage your digital signature", link: "/signature" },
  { title: "Activity Log", description: "Track your recent actions and events", link: "/activity" },
]

export function SearchResults() {
  const { searchTerm } = useSearch()

  if (!searchTerm) return null

  const filteredResults = searchableContent.filter(
    item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (filteredResults.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p>No results found for "{searchTerm}"</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Search Results</h2>
      {filteredResults.map((result, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <Link href={result.link} className="hover:underline">
                {result.title}
              </Link>
            </CardTitle>
            <CardDescription>{result.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

