export interface Activity {
  type: 'mood' | 'project' | 'course' | 'calendar';
  title: string;
  items: ActivityItem[];
}

interface ActivityItem {
  type: string;
  text: string;
  time?: {
    hour: string;
    minutes: string;
  };
}
