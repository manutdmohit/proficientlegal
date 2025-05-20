'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';

interface Activity {
  id: string;
  type: 'contact' | 'enquiry' | 'payment';
  name: string;
  email: string;
  message?: string;
  amount?: string;
  description?: string;
  timestamp: string;
}

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('/api/admin/recent-activity');
        if (!response.ok) {
          throw new Error('Failed to fetch activities');
        }
        const data = await response.json();
        setActivities(data);
      } catch (err) {
        console.error('Error fetching activities:', err);
        setError('Failed to load recent activity');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[350px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[350px] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <ScrollArea className="h-[350px]">
      <div className="space-y-8">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src={`https://avatar.vercel.sh/${activity.email}`}
                alt={activity.name}
              />
              <AvatarFallback>
                {activity.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {activity.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {activity.type === 'payment' ? (
                  <>
                    Paid {activity.amount} for {activity.description}
                  </>
                ) : (
                  activity.message
                )}
              </p>
            </div>
            <div className="ml-auto font-medium text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(activity.timestamp), {
                addSuffix: true,
              })}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
