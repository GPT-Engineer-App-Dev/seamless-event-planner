import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Attendees = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Attendees</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No attendees available.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendees;