import { NavBar } from "@/components/nav-bar"
import { SideNav } from "@/components/side-nav"
import { SearchResults } from "@/components/search-results"
import { SearchProvider } from "@/contexts/search-context"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = () => {
      const token = localStorage.getItem("authToken")
      setIsAuthenticated(!!token)
    }

    checkAuth()

    // Redirect to login if not authenticated and not already on login or signup page
    if (!isAuthenticated && !["/login", "/signup"].includes(pathname)) {
      router.push("/login")
    }
  }, [isAuthenticated, router, pathname])

  if (!isAuthenticated && !["/login", "/signup"].includes(pathname)) {
    return null // or a loading spinner
  }

  return (
    <SearchProvider>
      {["/login", "/signup"].includes(pathname) ? (
        children
      ) : (
        <div>
          <NavBar />
          <div className="flex">
            <SideNav className="w-64 border-r" />
            <main className="flex-1 p-6">
              <SearchResults />
              {children}
            </main>
          </div>
        </div>
      )}
    </SearchProvider>
  )
}

