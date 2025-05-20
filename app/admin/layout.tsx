'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Menu,
  LayoutDashboard,
  Users,
  MessageSquare,
  CreditCard,
  Settings,
  ChevronLeft,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';

const sidebarNavItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Contacts',
    href: '/admin/contacts',
    icon: Users,
  },
  {
    title: 'Enquiries',
    href: '/admin/enquiries',
    icon: MessageSquare,
  },
  {
    title: 'Payments',
    href: '/admin/payments',
    icon: CreditCard,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'unauthenticated' && pathname !== '/admin/login') {
      router.replace('/admin/login');
    }
  }, [status, pathname, router]);

  if (status === 'loading') return null;

  // Only render the login form (children) on /admin/login
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'hidden lg:flex flex-col border-r bg-background transition-all duration-300',
          isCollapsed ? 'w-16' : 'w-64'
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Image
                src="/proficient-legal-logo.png"
                alt="Proficient Legal Logo"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <span className="font-semibold">Admin Panel</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronLeft
              className={cn(
                'h-4 w-4 transition-transform',
                isCollapsed && 'rotate-180'
              )}
            />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <nav className="grid gap-1 p-2">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'transparent',
                  isCollapsed && 'justify-center'
                )}
              >
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>
        {/* Logout Button at the bottom */}
        <div className="p-4 mt-auto">
          <Button
            variant="outline"
            className="w-full flex items-center gap-2"
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
          >
            <LogOut className="h-4 w-4" />
            {!isCollapsed && <span>Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed top-4 left-4 z-40"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="border-b px-4 py-3">
            <SheetTitle>Admin Panel</SheetTitle>
            <SheetDescription>
              Navigation menu for admin dashboard
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-1">
            <nav className="grid gap-1 p-2">
              {sidebarNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors',
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'transparent'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
          </ScrollArea>
          {/* Logout Button for mobile */}
          <div className="p-4">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar with Logout */}
        <div className="border-b bg-background">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              {sidebarNavItems.find((item) => item.href === pathname)?.title ||
                'Dashboard'}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {session.user?.email}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => signOut({ callbackUrl: '/admin/login' })}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-6">{children}</div>
      </main>
    </div>
  );
}
