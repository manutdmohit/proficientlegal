"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from "recharts";
import { Users, CreditCard, Settings as SettingsIcon, LogOut } from "lucide-react";

const mockUsers = [
  { id: 1, name: "Alice Smith", email: "alice@demo.com", role: "admin", joined: "2024-01-10" },
  { id: 2, name: "Bob Jones", email: "bob@demo.com", role: "user", joined: "2024-02-15" },
  { id: 3, name: "Charlie Lee", email: "charlie@demo.com", role: "user", joined: "2024-03-20" },
];

const mockPayments = [
  { id: 1, user: "Alice Smith", amount: 550, date: "2024-04-01", service: "Comprehensive Consultation" },
  { id: 2, user: "Bob Jones", amount: 110, date: "2024-04-05", service: "Targeted Consultation" },
  { id: 3, user: "Charlie Lee", amount: 550, date: "2024-04-10", service: "Comprehensive Consultation" },
];

const usersChartData = [
  { month: "Jan", users: 1 },
  { month: "Feb", users: 2 },
  { month: "Mar", users: 3 },
  { month: "Apr", users: 3 },
];

const paymentsChartData = [
  { month: "Jan", payments: 0 },
  { month: "Feb", payments: 0 },
  { month: "Mar", payments: 0 },
  { month: "Apr", payments: 3 },
];

const SIDEBAR_ITEMS = [
  { key: "users", label: "Users", icon: Users },
  { key: "payments", label: "Payments", icon: CreditCard },
  { key: "settings", label: "Settings", icon: SettingsIcon },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState("users");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("mockAdmin") !== "true") {
      router.push("/admin/login");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("mockAdmin");
    router.push("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col py-8 px-4 shadow-lg">
        <div className="flex items-center mb-10">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full mr-3" />
          <span className="font-bold text-xl text-gray-800">Admin</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.key}>
                  <Button
                    variant={tab === item.key ? "default" : "ghost"}
                    className="w-full justify-start gap-2 px-4 py-2 font-medium"
                    onClick={() => setTab(item.key)}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button
          onClick={handleLogout}
          variant="destructive"
          className="mt-8 w-full justify-start gap-2 px-4 py-2 font-semibold"
        >
          <LogOut className="h-5 w-5" /> Logout
        </Button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        {tab === "users" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Users Growth</CardTitle>
                </CardHeader>
                <CardContent style={{ height: 250 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={usersChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Joined</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.joined}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </>
        )}
        {tab === "payments" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Payments This Year</CardTitle>
                </CardHeader>
                <CardContent style={{ height: 250 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={paymentsChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="payments" fill="#10b981" barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.user}</TableCell>
                        <TableCell>{payment.service}</TableCell>
                        <TableCell>${payment.amount}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </>
        )}
        {tab === "settings" && (
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-500">Settings content goes here.</div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
} 