"use client"

import { Home, Settings, Users, Mail, Bell, FileCheck, PenTool, BarChart2, LogOut, Database } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SideNavProps {
  className?: string
}

export function SideNav({ className }: SideNavProps) {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/settings", icon: Settings, label: "Settings" },
    { href: "/information-requests", icon: Users, label: "Information requests" },
    { href: "/notarization", icon: Mail, label: "Notarization" },
    { href: "/notifications", icon: Bell, label: "Notifications" },
    { href: "/data-storage", icon: Database, label: "Data and Storage" },
    { href: "/verifications", icon: FileCheck, label: "Previous Verifications" },
    { href: "/signature", icon: PenTool, label: "Digital Signature" },
    { href: "/activity", icon: BarChart2, label: "Activity Log" },
  ]

  return (
    <div className={cn("pb-12 min-h-screen", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-8 h-8 rounded-full bg-muted">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User"
                className="rounded-full"
              />
            </div>
            <h2 className="text-lg font-semibold">Jane Doe</h2>
          </div>
        </div>
        <div className="px-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href && "bg-green-400 hover:bg-green-500"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-3">
        <Button variant="ghost" className="w-full justify-start text-red-500">
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}

