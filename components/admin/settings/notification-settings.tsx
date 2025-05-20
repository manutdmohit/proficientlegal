'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface NotificationPreferences {
  emailNotifications: boolean;
  newEnquiries: boolean;
  newPayments: boolean;
  systemUpdates: boolean;
}

export function NotificationSettings() {
  const { data: session } = useSession();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    emailNotifications: true,
    newEnquiries: true,
    newPayments: true,
    systemUpdates: true,
  });

  useEffect(() => {
    fetchPreferences();
  }, []);

  const fetchPreferences = async () => {
    try {
      const response = await fetch('/api/admin/settings/notifications');
      if (!response.ok) throw new Error('Failed to fetch preferences');
      const data = await response.json();
      setPreferences(data);
    } catch (error) {
      console.error('Error fetching notification preferences:', error);
    }
  };

  const handleToggle = (key: keyof NotificationPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/settings/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update preferences');
      }

      toast({
        title: 'Success',
        description: 'Notification preferences updated successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description:
          error instanceof Error
            ? error.message
            : 'Failed to update preferences',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications via email
            </p>
          </div>
          <Switch
            checked={preferences.emailNotifications}
            onCheckedChange={() => handleToggle('emailNotifications')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>New Enquiries</Label>
            <p className="text-sm text-muted-foreground">
              Get notified about new enquiries
            </p>
          </div>
          <Switch
            checked={preferences.newEnquiries}
            onCheckedChange={() => handleToggle('newEnquiries')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>New Payments</Label>
            <p className="text-sm text-muted-foreground">
              Get notified about new payments
            </p>
          </div>
          <Switch
            checked={preferences.newPayments}
            onCheckedChange={() => handleToggle('newPayments')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>System Updates</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications about system updates
            </p>
          </div>
          <Switch
            checked={preferences.systemUpdates}
            onCheckedChange={() => handleToggle('systemUpdates')}
          />
        </div>
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save Preferences'}
      </Button>
    </form>
  );
}
