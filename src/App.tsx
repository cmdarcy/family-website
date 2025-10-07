import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Megaphone,
  Camera,
  Utensils,
  Wine,
  Clover,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router";

function App() {
  const scheduleItems = [
    {
      time: "7:00 - 10:00 AM",
      title: "Mini-Continental Breakfast",
      location: "Main Kitchen",
      icon: Utensils,
      color: "bg-primary/10 text-primary",
    },
    {
      time: "5:00 - 6:00 PM",
      title: "Happy Hour",
      description: "Red Wine Spritzers",
      location: "Poolside",
      icon: Wine,
      color: "bg-primary/10 text-primary",
    },
    {
      time: "6:00 PM",
      title: "Family Portrait",
      location: "1st floor Rec Room",
      description:
        "Meet on 1st floor Rec Room. Don't forget to bring your green!",
      icon: Camera,
      color: "bg-primary/10 text-primary",
    },
    {
      time: "7:00 PM",
      title: "Family Welcome Dinner",
      icon: Utensils,
      color: "bg-primary/10 text-primary",
    },
    {
      time: "8:00 PM",
      title: "Irish and Genealogy Night",
      location: "Main Hall",
      icon: Clover,
      color: "bg-primary/10 text-primary",
    },
  ];

  const announcements = [
    {
      title: "Family Tree Display",
      message:
        "Check out our updated family tree in the main hall. Add any missing information!",
    },
    {
      title: "Add Your Photos",
      message: "Click the link below to add your photos to the family album!",
      link: "https://photos.app.goo.gl/fSmnT6sBvrhFFNVF9 ",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="flex justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/Monday">Monday</Link>
        <Link to="/Tuesday">Tuesday</Link>
        <Link to="/Wednesday">Wednesday</Link>
        <Link to="/Thursday">Thursday</Link>
        <Link to="/Friday">Friday</Link>
        <Link to="/Saturday">Saturday</Link>
      </nav>
      <header className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            OBX Family Trip 2025
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty">
            Together Again, Making Memories
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-primary-foreground/80">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">Monday, October 6th, 2025</span>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
