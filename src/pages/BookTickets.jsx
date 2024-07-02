import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ticketSchema = z.object({
  event: z.string().min(1, "Event is required"),
  tickets: z.number().min(1, "At least one ticket is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

const fetchEvents = async () => {
  const response = await fetch("/api/events");
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
};

const BookTickets = () => {
  const { data: events, error, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ticketSchema),
  });

  const onSubmit = (data) => {
    toast("Tickets booked successfully", {
      description: `You have booked ${data.tickets} tickets for ${data.event}`,
    });
    reset();
  };

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error.message}</p>;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Book Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="event">Event</label>
              <Select {...register("event")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an event" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event.id} value={event.name}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.event && <p className="text-red-500">{errors.event.message}</p>}
            </div>
            <div>
              <label htmlFor="tickets">Number of Tickets</label>
              <Input id="tickets" type="number" {...register("tickets", { valueAsNumber: true })} />
              {errors.tickets && <p className="text-red-500">{errors.tickets.message}</p>}
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <Input id="name" {...register("name")} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <Button type="submit" variant="primary">Book Tickets</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookTickets;