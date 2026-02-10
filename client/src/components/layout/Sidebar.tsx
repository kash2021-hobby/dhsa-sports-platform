import { Link } from "wouter";
import {
  LayoutDashboard,
  Trophy,
  CheckCircle,
  Users,
  UserCheck,
  Gamepad2,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Tournaments", href: "/tournaments", icon: Trophy },
  { label: "Approvals", href: "/approvals", icon: CheckCircle },
  { label: "Teams", href: "/teams", icon: Users },
  { label: "Players", href: "/players", icon: UserCheck },
  { label: "Matches", href: "/matches", icon: Gamepad2 },
  { label: "Financial", href: "/financial", icon: BarChart3 },
  { label: "Admin Users", href: "/admin-users", icon: Users },
  { label: "Audit Logs", href: "/audit-logs", icon: Menu },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 z-50 lg:relative lg:transform-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            <span className="font-bold text-sidebar-foreground">DHSA</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-sidebar-foreground hover:text-sidebar-accent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <a className="sidebar-nav-item sidebar-nav-item-inactive flex items-center gap-3 group">
                    <Icon className="w-5 h-5 transition-colors group-hover:text-sidebar-accent-foreground" />
                    <span>{item.label}</span>
                  </a>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-sidebar-border p-4">
          <button className="sidebar-nav-item sidebar-nav-item-inactive w-full flex items-center gap-3">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
