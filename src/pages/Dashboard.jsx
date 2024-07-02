import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Event Management Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here you can manage all your events, attendees, and settings.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No upcoming events.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No recent activities.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;