import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="primary" className="mb-4">Create Event</Button>
          <p>No events available.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;