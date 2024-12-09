"use client"

import { Search, HelpCircle, Grid, User } from 'lucide-react'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSearch } from "@/contexts/search-context"

export function NavBar() {
  const { searchTerm, setSearchTerm } = useSearch()
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4 max-w-[1400px] mx-auto">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            A
          </div>
          <span>Acme Corp</span>
        </Link>
        <div className="flex-1 ml-4">
          <div className="relative max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 bg-muted"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <HelpCircle className="h-4 w-4 mr-2" />
            Help
          </Button>
          <Button variant="ghost" size="sm">
            FAQ
          </Button>
          <Button variant="ghost" size="icon">
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  )
}

