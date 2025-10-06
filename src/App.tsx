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
      title: "Parking Information",
      message:
        "Please park in the main lot. Overflow parking available across the street.",
    },
    {
      title: "Weather Update",
      message: "Sunny skies expected! We'll have tents set up for shade.",
    },
    {
      title: "Family Tree Display",
      message:
        "Check out our updated family tree in the main hall. Add any missing information!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Schedule Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Today's Schedule
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {scheduleItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-3`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {item.time}
                    </Badge>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Announcements Section */}
        <section>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <Megaphone className="w-8 h-8 text-accent" />
              <h2 className="text-4xl font-bold text-foreground">
                Announcements
              </h2>
            </div>
            <p className="text-lg text-muted-foreground text-pretty">
              Important information and updates for the day
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {announcements.map((announcement, index) => (
              <Card
                key={index}
                className="bg-card hover:bg-secondary/50 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-xl">
                    {announcement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {announcement.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Today's Theme Section */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Today's Theme
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              A special focus for our family activities today!
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Irish Night
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/irish.jpg"
                alt="irish theme"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;
